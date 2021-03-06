import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  voteCount:any = [0,1]

  highestVote = 0;

  quotes: Quote[] = [
    new Quote(`Only in the darkness can you see the light`, `Martin luther king`, `Marting`, new Date(2020, 2, 8)),
    new Quote(`Only in the darkness can yQuoteou see the light`, `Martin luther king`, `Marting`, new Date(2020 ,1,8)),
   
  ]

 

  addNewQuote(quote) {
    this.quotes.push(quote)
  }

  toggleQuote(index) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote
  }

  deleteQuote(index) {
    this.quotes.splice(index, 1)
  }

  

  upvote(index) {

    

    this.quotes[index].totalUpvotes = this.quotes[index].totalUpvotes += 1

    this.highestVote = Math.max(...this.voteCount);

    if (this.quotes[index].totalUpvotes > this.highestVote) {
      
      this.quotes[index].highest = true;
      
    }

    
    else this.quotes[index].highest = false;

    this.voteCount.push(this.quotes[index].totalUpvotes)
    
    


  }





  downvote(index) {
    this.quotes[index].totalDownvotes = this.quotes[index].totalDownvotes += 1
  }



  constructor() { }

  ngOnInit(): void {
  }

}
