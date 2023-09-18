import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { HomeComponent } from './_components/home/home.component';
import { ReembolsosComponent } from './_components/reembolsos/reembolsos.component';
import { BonosComponent } from './_components/bonos/bonos.component';
import { CajaComponent } from './_components/caja/caja.component';
import { ExcedentesComponent } from './_components/excedentes/excedentes.component';
import { ExcesosComponent } from './_components/excesos/excesos.component';
import { LicenciasComponent } from './_components/licencias/licencias.component';
import { OpasComponent } from './_components/opas/opas.component';
import { RecaudacionesComponent } from './_components/recaudaciones/recaudaciones.component';
import { AuthGuard } from './_guards/auth.guard';
import { ErrorGeneralComponent } from './_components/error-general/error-general.component';

const routes: Routes = [
	{
		path: 'login', component: LoginComponent
	},
	{
		path: 'error', component: ErrorGeneralComponent
	},
	{
		path: 'home', component: HomeComponent, canActivate: [AuthGuard]
	},
	{
		path: 'reembolsos', component: ReembolsosComponent, canActivate: [AuthGuard]
	},
	{
		path: 'bonos', component: BonosComponent, canActivate: [AuthGuard]
	},
	{
		path: 'caja', component: CajaComponent, canActivate: [AuthGuard]
	},
	{
		path: 'excedentes', component: ExcedentesComponent, canActivate: [AuthGuard]
	},
	{
		path: 'excesos', component: ExcesosComponent, canActivate: [AuthGuard]
	},
	{
		path: 'licencias', component: LicenciasComponent, canActivate: [AuthGuard]
	},
	{
		path: 'opas', component: OpasComponent, canActivate: [AuthGuard]
	},{
		path: 'recaudaciones', component: RecaudacionesComponent, canActivate: [AuthGuard]
	},

	{ path: '', pathMatch: 'full', redirectTo: 'login' },
	{ path: '**', pathMatch: 'full', redirectTo: 'error' },

];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {

}
