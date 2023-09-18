import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav/sidenav';
import { Observable } from 'rxjs';

import { Session } from 'src/app/_models/Session';
import { AuthenticateService } from 'src/app/_services/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input() inputSideNav: MatSidenav;

  hasToken$: Observable<boolean>;
  public user: Session;
  public today: number;
  public nombreCompleto: string;
  public rut: string;
  public sucursal: string;
  public usuarioSybase: string;
  public isAuthenticated: boolean;
  constructor(private authenticateService: AuthenticateService) {
    this.user = new Session;
    this.today = Date.now();
  }

  ngOnInit() {
    this.hasToken$ = this.authenticateService.isLoggedIn;
  }

  public logout(): void {
    if (this.hasToken$) {
      this.authenticateService.logout();
      this.inputSideNav.close();
    }
  }
  getSession() {
    this.user = this.authenticateService.getCurrentUser();
    this.nombreCompleto = this.user.nombreCompleto;
    this.rut = this.user.username;
    this.sucursal = this.user.idSucursal +' - '+ this.user.nomSucursal;
    this.usuarioSybase = this.user.usuSybase;
  }
}
