import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClaseDocumento } from '../_models/ClaseDocumento';
import { PeriodoContable } from '../_models/PeriodoContable';
// import { Banco } from '../_models/Banco';
// import { Sucursal } from '../_models/Sucursal';

@Injectable({
  providedIn: 'root'
})
export class SelectorService {

  //private url = environment.server + environment.rest_api + 'private';
  private url = environment.server + environment.rest_api ;
  constructor(private http: HttpClient) { }


  getClaseDocumento(concepto: String){
    return this.http.get<ClaseDocumento[]>(`${this.url}private/clases/clases-concepto/` + concepto);
  }
  
  
  getPeriodoContable(){
    return this.http.get<PeriodoContable[]>(`${this.url}private/periodos/periodo-contable`);
  }


}