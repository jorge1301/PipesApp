import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styles: [
  ]
})
export class ComunesComponent implements OnInit {
  nombreUpperCase: string = 'jorge';
  nombreLowerCase: string = 'JORGe';
  nombreTitleCase: string = 'JoRgE cAStRo';
  fecha: Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
