import { Component } from '@angular/core';
import { AComponent } from "../a/a.component";

@Component({
  selector: 'app-lifecycle',
  imports: [AComponent],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {

}
