import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Opciones } from '../../_models/Opciones';
import { AuthenticateService } from '../../_services/authenticate.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

	public opciones: Array<Opciones>;
  public logeado: boolean;
  @Input() inputSideNav: MatSidenav;

	constructor(private authenticationService: AuthenticateService) {
		this.opciones = [];
	}

	ngOnInit() {
		this.logeado = this.authenticationService.isAuthenticated();
		this.loadMenu();
	}

	loadMenu() {
		this.opciones = this.authenticationService.getOpciones();
	}
}
