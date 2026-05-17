import { Component } from '@angular/core';
import { BComponent } from "../b/b.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-a',
  imports: [BComponent,CommonModule],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {

     messageFromParent:string="*******"
     isVisible=true

     contentMessage="Hello ABC"

     changeContentMessge(msg:string)
     {
        this.contentMessage=msg
     }

     changeIsVisible(){
      this.isVisible=!this.isVisible
     }


     //changeMessage('Hello')
     changeMessage(message:string)
     {
        this.messageFromParent=message
     }
}
