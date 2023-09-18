import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ClaseDocumento } from 'src/app/_models/ClaseDocumento';
import { SelectorService } from 'src/app/_services/selector.service'; 
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-clase-documento',
  templateUrl: './clase-documento.component.html',
  styleUrls: ['./clase-documento.component.scss']
})
export class ClaseDocumentoComponent implements OnInit {

selectClaseDocumento = new FormControl('', Validators.required);

listaClaseDocumento: ClaseDocumento[];


  //El valor del elemento
  @Input() public concepto: String;

  @Output() claseDocumentoChange = new EventEmitter<string>();


  claseDocumentoControl = new FormControl('', Validators.required);

constructor(private selectorSvc:SelectorService) { }


  ngOnChanges(changes: SimpleChanges): void {
  }

ngOnInit(): void {

  this.selectorSvc.getClaseDocumento(this.concepto).subscribe(resp => {
  this.listaClaseDocumento = resp;
  //console.log(resp);
  //console.log(this.listaClaseDocumento);
 }, (error) => {
    console.error(error);
  });

  this.claseDocumentoControl.valueChanges.subscribe(value =>{
   // console.log(value);
    this.claseDocumentoChange.emit(value);
  });

}


}
