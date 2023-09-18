﻿import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticateService } from '../_services/authenticate.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private router: Router, private authenticateService: AuthenticateService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		/*if (this.authenticateService.getCurrentUser()) {
			return true;
		}
		this.router.navigate(['/error', { error: 'unauthorized' }]);
		return false;*/

		  //Si la ruta es el home, basta con usuario logueado (no existe permiso definido para la ruta "/home")
		  if(this.authenticateService.getCurrentUser() && state.url === '/home'){
			return true;
		  //En caso de corresponder a otra ruta, determina si existe usuario logueado y permiso para esa ruta
		  } else if (this.authenticateService.getCurrentUser() && this.authenticateService.canAccessRoute(state.url)) {
			return true;
		  } else {
			this.router.navigate(['/error', { error: 'unauthorized' }]);
			return false;
		  }
	}
}