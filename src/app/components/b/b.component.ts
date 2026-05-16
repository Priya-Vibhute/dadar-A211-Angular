import { Component, Input } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
         
    @Input()  message:string="Good Morning"

    constructor()
    {
      console.log("constructor",this.message)
    }

    // ngOnOnit lifecycle method
    ngOnInit()
    {
            console.log("ngOnInit",this.message)
    }

    ngOnChanges()
    {
      console.log("ngOnChanges");
      
    }



}
