import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {
  name: string = 'Leonardo Abras';
  cargo = 'Developer';
  cpf = '111.111.111-11';
  salario = 5000.02;
  hobbies = ['futebol','fotografia','saudades'];
  carro = {
    marca: 'Mercedes',
    modelo: 'CLA200'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
