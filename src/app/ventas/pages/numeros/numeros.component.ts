import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {
  ventasNetas: number = 2567894.8957;
  porcentaje: number = 0.6835;

  constructor() { }

  ngOnInit(): void {
  }

}
