import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticateService } from '../_services/authenticate.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	//Intercepta las peticiones y les agrega el header
	constructor(private authenticationService: AuthenticateService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		if (this.authenticationService.isLoggedIn) {
			const authToken = this.authenticationService.getCurrentToken();
			// console.log(authToken);
			const authReq = req.clone({
				headers: req.headers.append('X-Auth-Token', authToken)
			});
			return next.handle(authReq);
		}
		return next.handle(req);
	}
}
