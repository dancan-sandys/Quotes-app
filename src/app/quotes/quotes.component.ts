import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
 
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

quotes:Quote[] = [
  new Quote(`Only in the darkness can you see the light`, `Martin luther king`, `Marting`, new Date()),
  new Quote(`Only in the darkness can yQuoteou see the light`, `Martin luther king`, `Marting`, new Date()), 
  new Quote(`Only in the darkness can you see the light`, `Martin luther king`, `Marting`, new Date()),
  new Quote(`Only in the darkness can you see the light`, `Martin luther king`, `Marting`, new Date())
]

addNewQuote(quote){
this.quotes.push(quote)
}

toggleQuote(index){
  this.quotes[index].showQuote = !this.quotes[index].showQuote
}

deleteQuote(index){
  this.quotes.splice(index,1)
}

upvote(index){
  this.quotes[index].totalUpvotes = this.quotes[index].totalUpvotes+=1
}

downvote(index){
  this.quotes[index].totalDownvotes = this.quotes[index].totalDownvotes+=1
}



  constructor() { }

  ngOnInit(): void {
  }

}
