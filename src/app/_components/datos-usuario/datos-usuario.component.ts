import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from 'src/app/_models/Session';
import { AuthenticateService } from 'src/app/_services/authenticate.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.scss']
})
export class DatosUsuarioComponent implements OnInit {

  hasToken$: Observable<boolean>;
  public user: Session;
  public nombreCompleto: string;
  public rut: string;
  public sucursal: string;
  public usuarioSybase: string;

  constructor(private authenticateService: AuthenticateService) {
    this.user = new Session;
  }

  ngOnInit(): void {
    this.getSession();
  }

  public getSession() {
    this.user = this.authenticateService.getCurrentUser();
    if (this.user != null) {
      this.nombreCompleto = this.user.nombreCompleto;
      this.rut = this.user.username;
      this.sucursal = this.user.idSucursal + ' - ' + this.user.nomSucursal;
      this.usuarioSybase = this.user.usuSybase;
    }
  }

}
