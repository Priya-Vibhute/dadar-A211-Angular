import { Component, ElementRef, Input, SimpleChange, ViewChild } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {
         
    @Input()  message:string="Good Morning"
    @ViewChild('para') paragraph!:ElementRef;
    @ViewChild('input') inputBox!:ElementRef;
    @ViewChild('box')  box !:ElementRef;

    constructor()
    {
      console.log("constructor",this.message)
    }

    // ngOnOnit lifecycle method
    ngOnInit()
    {
            console.log("ngOnInit",this.message)
    }

    ngOnChanges(changes:SimpleChange)
    {
      console.log("ngOnChanges",changes);
      
    }

    ngDoCheck()
    {
      console.log("ngDoCheck")
    }

    ngOnDestroy()
    {
      console.log("ngOnDestroy")
    }

    ngAfterContentInit()
    {
      console.log("ngAfterContentInit")
    }

    ngAfterContentChecked()
    {
      console.log("ngAfterContentChecked")
    }

    ngAfterViewInit()
    {
      this.paragraph.nativeElement.style.backgroundColor="plum"
      this.inputBox.nativeElement.focus()
      console.log("ngAfterViewInit",this.paragraph.nativeElement)
    }

    makeCircle()
    {
        this.box.nativeElement.style.borderRadius="50%"
        this.box.nativeElement.style.backgroundColor="plum"

    }


}
