import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excesos',
  templateUrl: './excesos.component.html',
  styleUrls: ['./excesos.component.scss']
})
export class ExcesosComponent implements OnInit {
  reportService: any;


  tipoDocumento: string;
  periodoContable: number;

  constructor() {
    this.tipoDocumento ="EXCESOS";
   }

  ngOnInit(): void {}
  
  ngOnDestroy(): void { }

}
