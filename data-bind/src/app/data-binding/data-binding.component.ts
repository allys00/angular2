import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'André Alys';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/output/city-q-c-400-200-9.jpg';
  getCurtirCurso(){
    return true;
  }

  getValor(){
    return 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
