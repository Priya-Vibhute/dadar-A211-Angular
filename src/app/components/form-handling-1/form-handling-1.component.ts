import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-handling-1',
  imports: [FormsModule,CommonModule],
  templateUrl: './form-handling-1.component.html',
  styleUrl: './form-handling-1.component.css'
})
export class FormHandling1Component {

  onSubmit(form:NgForm)
  {
      console.log(form)
  }

}
