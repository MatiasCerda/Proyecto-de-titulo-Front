import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './_services/authenticate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'monitorContabilizacion-front';
  hasToken$: Observable<boolean>;
  urlProtegida: boolean;

  constructor(private authenticateService: AuthenticateService, 
              public router: Router,
              private dialog: MatDialog) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.urlProtegida == true) {
          const currentRoute = this.router.routerState;
          this.router.navigateByUrl(currentRoute.snapshot.url, { skipLocationChange: true });

            /*
            const dialogRef = this.dialog.open(ConfirmDialogComponent, {
              width: "400px",
              data: {
                titulo: 'Holo',
                btnOk: "Aceptar",
                btnCancel: "Cancelar",
                icon: "error_outline"
              }
            });

            dialogRef.afterClosed().subscribe(result => {
              if (result == 0) {
                this.urlProtegida = false;
                this.router.navigateByUrl(currentRoute.snapshot.url, { skipLocationChange: false });
              }
            });
            */
        }
      }
      if (event instanceof NavigationEnd) {
        if (event.url == '/control-cajero/ingresos-egresos') {
          this.urlProtegida = false; //true
        }
        else {
          this.urlProtegida = false;
        }
      }
    });

  }

  ngOnInit() {
    this.hasToken$ = this.authenticateService.isLoggedIn;
  }
}

