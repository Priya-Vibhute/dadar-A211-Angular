import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CourseComponent } from "../course/course.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CourseComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  studentdetails = "Vedant";

  receiveMessage(data:string)
  {
      console.log(data)
      alert(data)
  }
}
