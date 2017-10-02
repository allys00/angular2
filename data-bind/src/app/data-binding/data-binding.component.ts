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
  valorAtual = '';
  valorSalvo = '';
  isMouseOver: boolean = false;
  nome:string = 'abc';

  nomeDoCurso:string = 'Angular';
  
  valorInicial = 15;
  pessoa = {
    nome: 'Andre',
    idade: '18'
  }

   getCurtirCurso(){
    return true;
  }

  getValor(){
    return 1;
  }

  botaoClicado(){
    alert('Botão Clicado!!')
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor){
    this.valorSalvo = valor;
  }
  onMouse(){
    this.isMouseOver = !this.isMouseOver;
  }
  outMouse(){
    alert("mouseOut");
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }
  constructor() { }

  ngOnInit() {
  }

}
