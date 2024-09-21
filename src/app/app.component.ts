import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:number = 10;

  constructor(){
   console.log('subtract ', this.subtract(8,4))
  }

  public sum(num1: number, num2: number): number {
    return num1 + num2
  }

  private subtract(num1: number, num2: number):number{
    return num1 - num2
  }

  public getArray():void{
    const persons:number[] = [1,2,3,4,5]
    for(let i = 0; i < persons.length ; i++){
      console.log('person =', persons[i])
    }
  }

}
