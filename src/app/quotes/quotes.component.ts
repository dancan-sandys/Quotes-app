import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
 
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

quotes:Quote[] = [
  new Quote(`Only in the darkness xan you see the light`, `Martin luther king`),
  new Quote(`Only in the darkness xan you see the light`, `Martin luther king`),
  new Quote(`Only in the darkness xan you see the light`, `Martin luther king`),
  new Quote(`Only in the darkness xan you see the light`, `Martin luther king`)
]
  constructor() { }

  ngOnInit(): void {
  }

}
