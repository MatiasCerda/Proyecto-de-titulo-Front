import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PeriodoContable } from 'src/app/_models/PeriodoContable';
import { SelectorService } from 'src/app/_services/selector.service'; 

@Component({
  selector: 'app-periodo-contable',
  templateUrl: './periodo-contable.component.html',
  styleUrls: ['./periodo-contable.component.scss']
})
export class PeriodoContableComponent implements OnInit {

  selectPeriodoContable = new FormControl('', Validators.required);

  listaPeriodoContable: PeriodoContable[];

    //El valor del elemento
    @Input() public valor: String;

    @Output() periodoContableChange = new EventEmitter<string>();
    periodoContableControl = new FormControl('', Validators.required);
    

  constructor(private selectorSvc:SelectorService) { }

    //Agregar listener para oir cambios de variables enlazadas entre componentes
    ngOnChanges(changes: SimpleChanges): void {
      //Se llena primero la lista para poder setear el valor
      //this.llenarLista();
      //Se obtiene el valor actual de la propiedad que cambia, en este caso "valor" y se asigna al combo mediante el método "setValue"
      //this.selectPeriodoContable.setValue(changes.valor.currentValue);
    }

  ngOnInit(): void {

    this.selectorSvc.getPeriodoContable().subscribe(resp => {
      
      this.listaPeriodoContable = resp;
      //console.log(this.listaPeriodoContable);
   }, (error) => {
      console.error(error);
    });

    this.periodoContableControl.valueChanges.subscribe(value =>{
      this.periodoContableChange.emit(value);
    });
  
  
  }


}
