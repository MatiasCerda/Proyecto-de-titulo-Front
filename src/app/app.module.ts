import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//  import { Ng2Rut } from 'ng2-rut';
import { Ng9RutModule } from 'ng9-rut';
import { APP_FORMATS } from './app-date-adapter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getESPaginatorIntl } from './es-paginator-intl';

import { DatosUsuarioComponent } from './_components/datos-usuario/datos-usuario.component';
import { ErrorGeneralComponent } from './_components/error-general/error-general.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HeaderComponent } from './_components/header/header.component';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { MenuComponent } from './_components/menu/menu.component';
import { SpinnerComponent } from './_components/spinner/spinner.component';
import { AutofocusDirective } from './_directives/autofocus.directive';
import { AuthGuard } from './_guards/auth.guard';
import { AuthInterceptor } from './_interceptors/auth.interceptor';
import { ResponseInterceptor } from './_interceptors/response.interceptor';
import { NumeroPipe } from './_pipes/numero.pipe';
import { ExcedentesComponent } from './_components/excedentes/excedentes.component';
import { CajaComponent } from './_components/caja/caja.component';
import { BonosComponent } from './_components/bonos/bonos.component';
import { ReembolsosComponent } from './_components/reembolsos/reembolsos.component';
import { ExcesosComponent } from './_components/excesos/excesos.component';
import { OpasComponent } from './_components/opas/opas.component';
import { LicenciasComponent } from './_components/licencias/licencias.component';
import { RecaudacionesComponent } from './_components/recaudaciones/recaudaciones.component';
import { PeriodoContableComponent } from './_components/periodo-contable/periodo-contable.component';
import { ClaseDocumentoComponent } from './_components/clase-documento/clase-documento.component';
import { MuestraResumenComponent } from './_components/muestra-resumen/muestra-resumen.component';
@NgModule({
  declarations: [
    AppComponent,
	HomeComponent,
	LoginComponent,
	FooterComponent,
	HeaderComponent,
	MenuComponent,
	ErrorGeneralComponent,
    SpinnerComponent,
	DatosUsuarioComponent,
	NumeroPipe,
	AutofocusDirective,
	ExcedentesComponent,
	CajaComponent,
	BonosComponent,
	ReembolsosComponent,
	ExcesosComponent,
	OpasComponent,
	LicenciasComponent,
	RecaudacionesComponent,
	PeriodoContableComponent,
	ClaseDocumentoComponent,
	MuestraResumenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //  Ng2Rut,
    Ng9RutModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	MatInputModule,
	MatFormFieldModule,
	MatIconModule,
	MatButtonModule,
	MatMenuModule,
	MatToolbarModule,

	MatSidenavModule,
	MatExpansionModule,
	MatDialogModule,
	MatPaginatorModule,
	MatSortModule,
	MatTableModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,/*,
    ToastrModule.forRoot()*/
    MatSnackBarModule,
	MatDatepickerModule,
	MatCheckboxModule,
	MatSelectModule,
	MatRadioModule
  ],
  providers: [
    AuthGuard,
    {
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ResponseInterceptor,
			multi: true
    },
    {provide: MAT_DATE_LOCALE, useValue: 'es-CL'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: APP_FORMATS},
    { provide: MatPaginatorIntl, useValue: getESPaginatorIntl() }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
