import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Session } from '../_models/Session';
import { Opciones } from '../_models/Opciones';

@Injectable({
	providedIn: 'root'
})
export class AuthenticateService {
	private url = environment.server_security + environment.rest_security + "sec/";
	private app = 297;
	private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuthenticated());

	constructor(private http: HttpClient,
		private router: Router) { }

	login(username: string, password: string) {
		return this.http.post<Session>(`${this.url}authenticate`, { username: username, password: password, app: this.app })
			.pipe(map(user => {
				if (user && user.token) {
					this.setCurrentSession(user);
				}
				return user;
			}));
	}
	refresh(token: string) {
		if (this.isAuthenticated()) {
			let user = JSON.parse(localStorage.currentUser);
			user.token = token;
			localStorage.removeItem('currentUser');
			localStorage.setItem('currentUser', JSON.stringify(user));
		}
	}

	setCurrentSession(session: Session): void {
		localStorage.setItem('currentUser', JSON.stringify(session));
		this.loggedIn$.next(this.isAuthenticated());
	}

	logout(): void {
		this.removeCurrentSession();
		this.router.navigate(['/login']);
	}

	removeCurrentSession(): void {
		localStorage.removeItem('currentUser');
		this.loggedIn$.next(this.isAuthenticated());
	}

	getCurrentUser(): Session {
		return <Session>JSON.parse(localStorage.getItem('currentUser')) ?
			<Session>JSON.parse(localStorage.getItem('currentUser')) : null;
	}

	getCurrentToken(): string {
		return <Session>JSON.parse(localStorage.getItem('currentUser')) ?
			(<Session>JSON.parse(localStorage.getItem('currentUser'))).token : null;
	}
	getUsername(): string {
		return <Session>JSON.parse(localStorage.getItem('currentUser')) ?
			(<Session>JSON.parse(localStorage.getItem('currentUser'))).username : null;
	}
	getOpciones(): Opciones[] {
		return <Session>JSON.parse(localStorage.getItem('currentUser')) ?
			//(<Session>JSON.parse(localStorage.getItem('currentUser'))).opciones : null;
			(<Session>JSON.parse(localStorage.getItem('currentUser'))).opciones.filter(function filtraAccesibles(opc) {
				if(opc.accesible && opc.subOpciones != null && opc.subOpciones.length > 0){
				  opc.subOpciones = opc.subOpciones.filter(filtraAccesibles);
				  return true;
				} else {
				  return opc.accesible;
				}
			  }) : null;
	}


	canAccessRoute(route:string):boolean{
		if(this.isAuthenticated()){
		  if (this.getOpciones().filter(function buscaRuta(opc){
			if(opc.url === route && opc.accesible === true){
			  return true;
			} else if(opc.subOpciones != null && opc.subOpciones.length > 0){
			  if(opc.subOpciones.filter(buscaRuta).length === 0){
				return false;
			  } else {
				return true;
			  }
			} else {
			  return false;
			}
		  }).length > 0){ //El filtro encontró la URL dentro de los permisos
			return true;
		  } else { //El filtro no encontró la URL dentro de los permisos
			return false;
		  }
		} else { //Usuario no autenticado
		  return false;
		}
	  }
	

	isAuthenticated(): boolean {
		return (this.getCurrentToken() != null) ? true : false;
	}
	get isLoggedIn() {
		return this.loggedIn$.asObservable();
	}
}
