import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportService } from 'src/app/_services/report.service';
import { MuestraResumenComponent } from '../muestra-resumen/muestra-resumen.component';

@Component({
  selector: 'app-bonos',
  templateUrl: './bonos.component.html',
  styleUrls: ['./bonos.component.scss']
})
export class BonosComponent implements OnInit {



  //Para mostrar un componente a la vez
 // muestraResumenbool: boolean = false;
  //muestraDetallebool: boolean = false;

  readonly TIPO_DOCUMENTO: string;
  periodoContable: string;
  claseDocumento: string;
  //private contentPlaceholderRes: MuestraResumenComponent;
  //private contentPlaceholderDet: MuestraDetalleComponent;

  @ViewChild(MuestraResumenComponent) muestraResumen: MuestraResumenComponent;
  

  constructor(private reportService: ReportService) {
    this.TIPO_DOCUMENTO = "BONOS"; 
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
