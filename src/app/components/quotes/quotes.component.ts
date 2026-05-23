import { Component } from '@angular/core';
import { Quote, QuotesService } from '../../services/quotes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {

    quotes:Quote[]=[]
    constructor(private quoteService:QuotesService){}

    getQuotes()
    {
        this.quoteService.getQuotes()
        .subscribe(
          { next:(data)=>this.quotes=data.quotes}
        )

    }

    ngOnInit()
    {
       this.getQuotes()
    }


    getByAuthor(authorName:string)
    {
        this.quoteService.getQuotes()
        .subscribe(
          { next:(data)=>{this.quotes=data.quotes;
            this.quotes=this.quotes.filter(q=>q.author==authorName)
          }}
        )
       
    }
}
