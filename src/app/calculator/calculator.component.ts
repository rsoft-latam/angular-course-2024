import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="calculator">
      <p>Calculator</p>
      <input type="text" [(ngModel)]="box1Value" >
      <input type="text" [(ngModel)]="box2Value">
      <div class="buttons-container">
          <button class="sum" (click)="onSum()">Sum</button>
          <button class="mul" (click)="onMul()">Mul</button>
          <button class="reset" (click)="onReset()">Reset</button>
          <button class="reset" (click)="onLogin()">Login</button>
          <button class="reset" [routerLink]="'/student'">Login without token</button>
      </div>
    </div>
  `,
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit {

  box1Value:number = 0
  box2Value:number = 0

  @Output() sum = new EventEmitter()
  @Output() mul = new EventEmitter()
  @Output() reset = new EventEmitter()

  constructor(private _activatedRoute: ActivatedRoute,
              private _authService: AuthService,
              private _router: Router
  ) { }

  ngOnInit(): void {
      this._activatedRoute.queryParams.subscribe(params => {
        console.log('query params: ', params)
      })

      console.log('query params snapshot: ', this._activatedRoute.snapshot.queryParams)
  }

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

  onLogin(){
    this._authService.login()
    this._router.navigate(['/student'])
  }

}
