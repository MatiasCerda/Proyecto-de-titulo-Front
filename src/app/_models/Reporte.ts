export class Reporte {
    pdfName : string;
    nombre : string;
    opcion : string;
    parametros: any;
  
    constructor(_pdfName:string, _nombre:string, _opcion:string , _parametros:any){
      this.pdfName = _pdfName;
      this.nombre = _nombre;
      this.opcion = _opcion;
      this.parametros = _parametros;
    };
  }