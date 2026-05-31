import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { commonPasswordValidator } from '../../../Validators';

@Component({
  selector: 'app-form-handling-2',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-handling-2.component.html',
  styleUrl: './form-handling-2.component.css'
})
export class FormHandling2Component {

  formGroup!:FormGroup;

  constructor(private formBuilder:FormBuilder){} 

  ngOnInit()
  {
    this.formGroup=this.formBuilder.group({
      name:["Ankita",[Validators.required,Validators.minLength(2)]],
      age:[18,[Validators.required,Validators.min(5),Validators.max(100)]],
      password:[1234,[Validators.required,
        Validators.pattern(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/)
        ,commonPasswordValidator]]
    })
  }

  onSubmit(){
    console.log("Form Submitted",this.formGroup)
        console.log("Form Submitted",this.formGroup.value)
        // console.log(this.formGroup.get('password'))

  }
   
}
