import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  box1Value:number = 0
  box2Value:number = 0

  @Output() sum = new EventEmitter()
  @Output() mul = new EventEmitter()
  @Output() reset = new EventEmitter()

  public onSum(){
    this.sum.emit(Number(this.box1Value) + Number(this.box2Value))
  }

  public onMul(){
    this.mul.emit(Number(this.box1Value) * Number(this.box2Value))
  }

  public onReset(){
    this.box1Value = 0
    this.box2Value = 0
    this.reset.emit(null)
  }

}
