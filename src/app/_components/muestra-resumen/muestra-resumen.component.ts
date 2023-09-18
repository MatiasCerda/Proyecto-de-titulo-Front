import { AfterViewInit, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResumenDatos } from 'src/app/_models/ResumenDatos';
import { SubTotal } from 'src/app/_models/SubTotal';
import { Totales } from 'src/app/_models/Totales';
import { DatosService } from 'src/app/_services/datos.service';


@Component({
  selector: 'app-muestra-resumen',
  templateUrl: './muestra-resumen.component.html',
  styleUrls: ['./muestra-resumen.component.scss']
})
export class MuestraResumenComponent implements OnInit, AfterViewInit {
  
  MuestraResumen = new FormControl('', Validators.required);
  ///DataSource de ResumenDatos
  displayedColumns: string[] = ['xsapEiEstado', 'xsapFecha', 'origen', 'intermedia', 'sap', 'tuplas'];
  sapPrmInter: string ="";
  dataSource: MatTableDataSource<ResumenDatos>;
  ELEMENT_DATA: ResumenDatos[] = [];
  data: ResumenDatos[];
  ///DataSource para SubTotales
  subtotalesColumns: string[]= ['estado', 'subTotalOrigen', 'subTotalIntermedia', 'subTotalSap', 'subTotalTuplas'];
  dataSourceSubTotal: MatTableDataSource<SubTotal>;
  subtotalEstados: SubTotal[] = []; 
  totales: Totales;

  SUB_TOTALES: SubTotal[] = [];
  
  ELEMENT_DATASUBTOTAL: SubTotal[] = []; 
  datasubtotal: SubTotal[];

  ////Usado en Totales 
  totalOrigen: number = 0;
  totalIntermedia: number = 0;
  totalSap: number = 0;
  totalTuplas: number = 0;
  
  


  @Input() public valor: number;
  @Input() public deshabilita?: boolean = false;
  //clase es la clase de documentos dentro del tipo como "Bonos"
  @Input() public clase: string;
  @Input() public tipo: string;
  @Input() public periodo: string;

  // Se llama al componente hijo, se le crea una variable (mostrarResumen)

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

 ngAfterViewInit() {
 //   this.dataSource.paginator = this.paginator;


  }

  constructor(private datosSvc:DatosService, private _snackBar: MatSnackBar,) { 
    this.data = this.ELEMENT_DATA;
    this.dataSource = new MatTableDataSource<ResumenDatos>([]);
    /////// Totales
    this.datasubtotal = this.ELEMENT_DATASUBTOTAL;
    this.dataSourceSubTotal = new MatTableDataSource<SubTotal>([]);

  }

  ngOnChanges(changes: SimpleChanges): void {
   // this.MuestraResumen.setValue(changes.valor.currentValue);
  }

  ngOnInit(): void {
    //console.log("muestra-resumen");
    
  }
  public mostrarResumen(){

  this.datosSvc.getResumen(this.tipo, this.periodo, this.clase).subscribe(resp => {
    //console.log(resp);
    //Se limpia por cada consulta
    this.subtotalEstados = [];
    this.totalOrigen = 0;
    this.totalIntermedia = 0;
    this.totalSap = 0;
    this.totalTuplas = 0;
    this.SUB_TOTALES = [];
    if (resp != null && resp.length > 0) {
    //console.log("resp: " + resp)
    this.dataSource = new MatTableDataSource<ResumenDatos>(resp);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.sapPrmInter = resp[0].sapPrmInter;
        //console.log(estados);
        //estados.map( numero => console.log(numero +'1'));
        if(this.dataSource.data.length > 0){
        } //Fin casos con datos
    }
    else{
      //Mensaje en caso de que el array venga vacío 
      this.dataSource = new MatTableDataSource<ResumenDatos>([]);
      this._snackBar.open('🔔 No se encontraron datos', 'Cerrar', {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
 }, (error) => {
    console.error(error);
  });
}

public ocultaResumen(){
  this.dataSource = new MatTableDataSource<ResumenDatos>([]);
  
}

}
