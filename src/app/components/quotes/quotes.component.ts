import { Component } from '@angular/core';
import { Quote, QuotesService } from '../../services/quotes.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule, RouterLink],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {

    quotes:Quote[]=[]
    isEditable=false;
    constructor(private quoteService:QuotesService,
      private activatedRoute:ActivatedRoute
    ){}
    

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
       this.activatedRoute.queryParams.subscribe({
        next:(data)=>{ this.isEditable=data['edit']}
       })
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
