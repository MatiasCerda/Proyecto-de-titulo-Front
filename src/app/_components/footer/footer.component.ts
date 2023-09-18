import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/_services/authenticate.service';
import { Observable } from 'rxjs';




@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

	hasToken$: Observable<boolean>;

	constructor(private authenticationService: AuthenticateService) { }

	ngOnInit() {
		this.hasToken$ = this.authenticationService.isLoggedIn;
	}

}
