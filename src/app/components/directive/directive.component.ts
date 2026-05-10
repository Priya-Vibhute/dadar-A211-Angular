import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

   classList:string[]=[]
   theme:boolean=true;
   loggedIn:boolean=false;

   students=["Nisha","Anisha","Manisha"]
   products=[
    {
      id:101,
      name:"Laptop",
      outOfStock:true
    },
    {
      id:102,
      name:"Mobile",
      outOfStock:true
    },
    {
      id:103,
      name:"Tablet",
      outOfStock:false
    }
   ]

   changeTheme()
   {
       this.theme=!this.theme
   }

   changeLogin()
   {
    this.loggedIn=!this.loggedIn
   }

   //addClasses('bg-warning')
   addClasses(className:string)
   {
       this.classList.push(className)
   }

   removeLastClass()
   {
    this.classList.pop();
   }
}
