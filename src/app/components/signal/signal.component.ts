import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
     count=signal(0);
     name=signal("Anisha")

     square=computed(()=>this.count()*this.count())

     constructor()
     {
        effect(()=>{
          console.log("Effect",this.count())
        })

         effect(()=>{
          console.log("Effect for name",this.name())
        })
     }

     increment()
     {
        // this.count.set(100);
        this.count.update((n)=>n+1)
     }


     decrement()
     {
       this.count.update(n=>n-1)
     }

     reset()
     {
      this.count.set(0)
     }

     changeName(name:string)
     {
      this.name.set(name);
     }
}
