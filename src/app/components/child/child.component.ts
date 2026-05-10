import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() data: string = "";

  @Output() eventemitter:EventEmitter<string>=new EventEmitter<string>()

  onBtnClick(){
      this.eventemitter.emit("we are learning angular")
  }



}
