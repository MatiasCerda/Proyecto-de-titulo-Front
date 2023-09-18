import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { AuthenticateService } from 'src/app/_services/authenticate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { RutValidator } from 'ng9-rut';
import { formatoRutGuionSinCeros } from 'src/app/_functions/RutFormat';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
	formLogin: FormGroup;
	returnUrl: string;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private authenticationService: AuthenticateService,
		fb: FormBuilder, rv: RutValidator
	) {
		this.formLogin = fb.group({
			username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10), rv]],
			password: ['', [Validators.required]]
		});
	}

	ngOnInit() {
		this.authenticationService.logout();
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}
	ngOnDestroy() {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}
	login() {
		if (this.formLogin.valid) {
			this.authenticationService.login(formatoRutGuionSinCeros(this.username.value), this.password.value)
				.pipe(takeUntil(this.destroyed$))
				.subscribe(
					data => {
						if (data) {
							this.router.navigate(['/home']);
						}
					});
		}
	}

	get username() { return this.formLogin.get('username'); }
	get password() { return this.formLogin.get('password'); }



}
