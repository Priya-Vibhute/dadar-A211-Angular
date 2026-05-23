import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, filter, from, interval, map, mergeAll, mergeMap, Observable, of, retry, Subject, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {

  data: any[] = []

  observable = new Observable((observer) => {

    setTimeout(() => { observer.next(11); }, 1000)
    setTimeout(() => { observer.next(12); }, 2000)
    setTimeout(() => { observer.next(13); }, 3000)
    // setTimeout(()=>{ observer.error("Something went wrong")},3500)
    setTimeout(() => { observer.next(14); }, 4000)
    setTimeout(() => { observer.complete() }, 3500)

  })


  getData1() {
    this.data = []
    this.observable.subscribe({
      next: (data) => { this.data.push(data) },
      error: (error) => { console.log(error) },
      complete: () => { console.log("Data emission completed") }
    })
  }


  getData2() {
    this.data = []
    from([23, 67, 34, 90, 100, "hello", "Bye"])
      .subscribe({
        next: (value) => this.data.push(value)
      })

  }


  getData3() {
    this.data = []
    from('Hello')
      .subscribe({ next: (value) => this.data.push(value) })
  }

  getData4() {
    this.data = []
    of([23, 67, 45, 90],"Bye",56,90,["dfgd"])
      .subscribe({ next: (value) => this.data.push(value) })
  }

  getData5()
  {
   const subcription= interval(500)
          .subscribe({ next: (value) => this.data.push(value) })

  
    setTimeout(()=>{
      subcription.unsubscribe()
    },10000)

  }


  getData6()
  {
    of(12,56,34,100,102,103)
    .pipe(
      take(4),
      map(n=>n*n),
      filter((n)=>n>500)
    ).subscribe({ next: (value) => this.data.push(value) })

  }


  getData7()
  {
    interval(1000)
    .pipe(
     mergeMap(n=>of(n+1)),
    ).subscribe({ next: (value) =>{ this.data.push(value)} })

  }

  getData8(){
     of(of(34),of(100),of(60),from([23,56]))
     .pipe(
      mergeAll()
     )
     .subscribe({ next: (value) =>{ this.data.push(value)} })
  }

   getData9()
  {
    interval(1000)
    .pipe(
        map((n)=>{
            if(n==4)
              throw new Error("Something went wrong")
            return n;
        })
        ,retry(2)
        ,catchError((error)=>{
          console.log(error.message)
          return of(23,56,45,78)
        })
    ).subscribe({ next: (value) =>{ this.data.push(value)} })

  }

 


}
