import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { MuestraResumenComponent } from '../muestra-resumen/muestra-resumen.component';
import { ReportService } from 'src/app/_services/report.service';
@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.scss']
})
export class CajaComponent implements OnInit {
  readonly TIPO_DOCUMENTO: string;
  periodoContable: string;
  claseDocumento: string;
  

  @ViewChild(MuestraResumenComponent) muestraResumen: MuestraResumenComponent;
  

  constructor(private reportService: ReportService) {
    this.TIPO_DOCUMENTO = "CAJA";
   }

  ngOnInit(): void {
   // console.log("bonoscomp");
   
  }
  ngOnDestroy(): void { }
  
  public recibeClaseDocumento(clase:string){
    //console.log(clase +" padre ");
    this.claseDocumento = clase;
    
  }
  public recibePeriodoContable(periodo:string){
    this.periodoContable = periodo;
  }

  public obtenerResumen(clase:string , periodo:string){

    //console.log(clase + periodo);
    this.muestraResumen.mostrarResumen();
  }

 public getReporte(tipoReporte: string) {
    let params = new HttpParams()
      .set('PERIODO', 'ST' + this.periodoContable)
      .set('CLASE', 'ST' +  this.claseDocumento)
      .set('CONCEPTO', 'ST' +   this.TIPO_DOCUMENTO)
      let name: string ="DetalleConcepto";
    if(tipoReporte == "Detalle"){
      name = 'DetalleConcepto';
    }else{
      name = 'ResumenConcepto'
    }
    let type = 'XLSX';
    //console.log(params);
    //console.log(name);
    this.reportService.getReporte(name, type, params);
  }
  /*public pruebaBoton(){
    console.log("EL boton sirve");
  } */
  public limpiar(){
    this.muestraResumen.ocultaResumen();
  }
}
