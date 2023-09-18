import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { errorDescripcion, erroresPosibles } from 'src/app/_models/Error';
import { AuthenticateService } from 'src/app/_services/authenticate.service';

@Component({
	selector: 'app-error-general',
	templateUrl: './error-general.component.html',
	styleUrls: ['./error-general.component.css']
})


export class ErrorGeneralComponent implements OnInit {
	error: errorDescripcion;
	constructor(private route: ActivatedRoute, private authenticateService: AuthenticateService) {
		console.log(this.route.snapshot.params['error']);
		if (!this.authenticateService.getCurrentUser()) {
			this.error = erroresPosibles.find(x =>
				x.nombre == 'unauthorized');
		}
		else if (this.route.snapshot.params['error']) {
			this.error = erroresPosibles.find(x =>
				x.nombre == this.route.snapshot.params['error']);
		}
		else {
			this.error = erroresPosibles.find(x =>
				x.nombre == 'notfound');
		}
		console.log('error ', this.error.nombre);

	}

	ngOnInit() { }
}
