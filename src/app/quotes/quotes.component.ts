import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
 
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

quotes:Quote[] = [
  new Quote(`Only in the darkness can you see the light`, `Martin luther king`),
  new Quote(`Only in the darkness can you see the light`, `Martin luther king`),
  new Quote(`Only in the darkness can you see the light`, `Martin luther king`),
  new Quote(`Only in the darkness can you see the light`, `Martin luther king`)
]

addNewQuote(quote){
this.quotes.push(quote)
}

toggleQuote(index){
  this.quotes[index].showQuote = !this.quotes[index].showQuote
}
  constructor() { }

  ngOnInit(): void {
  }

}
