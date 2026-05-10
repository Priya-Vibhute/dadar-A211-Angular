import { Component, Input } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-course',
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {


  @Input() id = 1
  @Input() title = "Angular Basics"
  @Input() instructor = "John Doe"
  @Input() duration = 10
  @Input() level = "Beginner"
  @Input() description = "Learn the basics of Angular development."
  @Input() price = 99.99


  constructor()
  {
    console.log(this.instructor)
  }

}