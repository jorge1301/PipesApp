import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Jorge';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };
  // i18nPlural
  clientes: string[] = ['Maria', 'Jorge', 'Daniela'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos # cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  coche = {
    marca: 'Audi',
    precio: 400000,
    ubicacion: 'Madrid',
  };

  heroes = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPersona(): void {
    this.nombre = 'Maria';
    this.genero = 'femenino'
  }

  cambiarClientes(): void {
    this.clientes.shift();
  }

  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data de promesa')
    }, 3500);
  });

}
