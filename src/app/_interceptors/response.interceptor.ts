import { Injectable, Inject } from '@angular/core'
import { HttpErrorResponse, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { AuthenticateService } from '../_services/authenticate.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from '../_services/spinner.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
	constructor(
		private authenticationService: AuthenticateService,
		private _snackBar: MatSnackBar,
		private spinner: SpinnerService
		// private toastr: ToastrService
	) { }
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.spinner.show();
		return next.handle(req).pipe(
			retry(3),
			tap((resp: HttpResponse<any>) => {
				if (resp instanceof HttpResponse) {
					this.spinner.hide();
					if (!navigator.onLine) {
						setTimeout(() => {
							this._snackBar.open('🔔 Tu equipo no esta conectado a Internet', 'Cerrar', {
								duration: 4000,
								horizontalPosition: 'center',
								verticalPosition: 'top',
							});
						});
					}
					if (resp.status == 204) {
						//Respuesta del securityRest en caso de que no pueda logear
						if (resp.headers.get('Response-Notes') != null) {
							this._snackBar.open('🔔 ' + resp.headers.get('Response-Notes'), 'Cerrar', {
								duration: 4000,
								horizontalPosition: 'center',
								verticalPosition: 'top',
							});
						}
					}
					if (resp.headers.get("x-auth-refresh") != null && resp.headers.get("x-auth-refresh") != '') {
						this.authenticationService.refresh(resp.headers.get("x-auth-refresh"));
					}
				}
				return resp;
			}), catchError(err => {
				this.spinner.hide();

				if (err.status == 401) {
					this.authenticationService.logout();
					this._snackBar.open('🔔 Su sesión ha expirado', 'Cerrar', {
						duration: 4000,
						horizontalPosition: 'center',
						verticalPosition: 'top',
					});

				} else if (err.status == 400) {
					this._snackBar.open('🔔 Error en la transacción. Por favor reintente nuevamente', 'Cerrar', {
						duration: 4000,
						horizontalPosition: 'center',
						verticalPosition: 'top',
					});
				} else {
					this._snackBar.open('🔔 Otro error: No fue posible conectarse a servidor. Por favor comuníquese con soporte TI', 'Cerrar', {
						duration: 4000,
						horizontalPosition: 'center',
						verticalPosition: 'top'
					});
				}


				return throwError(err);
			}));

	}
}
