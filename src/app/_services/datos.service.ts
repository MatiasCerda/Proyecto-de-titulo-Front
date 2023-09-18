import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DetalleDatos } from '../_models/DetalleDatos';
import { ResumenDatos } from '../_models/ResumenDatos';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  
  private url = environment.server + environment.rest_api  ;
  constructor(private http: HttpClient) { }

//Concepto es el componente "Bonos, Caja, Excedente"; Periodo corresponde a la fecha en string año mes ; clase corresponde al tipo de documento dentro del concepto
  getResumen(concepto:String, periodo:String, clase:String){
    return this.http.get<ResumenDatos[]>(`${this.url}private/resumen/datos-resumen/` + periodo + "/" + clase + "/" + concepto);
  }

  getDetalle(concepto:String, periodo:String, clase:String){
    return this.http.get<DetalleDatos[]>(`${this.url}private/detalle/datos-detalle/` + periodo + "/" + clase + "/" + concepto);
  }
}
