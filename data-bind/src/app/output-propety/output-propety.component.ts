import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-propety.component.html',
  styleUrls: ['./output-propety.component.css']
})
export class OutputPropetyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  color:boolean = false;



  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor:this.valor});
    if(this.valor == 20){
      this.color = !this.color;
    }
  }
  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor:this.valor});
  }


  constructor() { }

  ngOnInit() {
  }

}
