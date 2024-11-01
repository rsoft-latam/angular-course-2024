import { Component } from "@angular/core";
import { RouterOutlet, RouterLink, Router } from "@angular/router";
import { UserCardComponent } from "./user-card/user-card.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CommonModule } from "@angular/common";
import { CounterComponent } from "./counter/counter.component";
import { filter, from, map, tap } from "rxjs";
import { AppColorsDirective } from "./app-colors.directive";
import { CreateHtmlDirective } from "./create-html.directive";
import { PurePipe } from "./pure.pipe";
import { ImpurePipe } from "./impure.pipe";
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { StudentService } from "./services/student.service";

interface IPerson {
  name: string;
  lastName: string;
  age?: number;
}
interface IForm {
  name: string
  score: string
  school: string
  proffesor: string
  university: string
}
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    UserCardComponent,
    CalculatorComponent,
    CommonModule,
    CounterComponent,
    AppColorsDirective,
    CreateHtmlDirective,
    PurePipe,
    ImpurePipe,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})

export class AppComponent {

  scoreControl = new FormControl<string>('asdasdasd', [Validators.required])

  name:string = 'testName'
  lastName:string = ''


  users = [
    { name: "abc", email: "abc@gmail.com" },
    { name: "dfg", email: "dfg@gmail.com" },
  ];
  selectedUser: any = this.users[0];

  userCardCreated: boolean = false;

  result: number = 0;
  title: number = 10;
  animals: string[] = ["a", "b", "c", "d", "e", "f", "g"];

  person: IPerson = {
    name: "Juan",
    lastName: "Perez",
    age: 25,
  };
  students: number[] = [1, 2, 3, 4, 5, 6,7,8,9];
  parents: number[] = [7, 8, 9, 10];

  var1 = 0;
  var2 = null;
  var3 = "hola";

  youtube = from([1, 2, 3, 4, 5, 6]);

  studentForm!: FormGroup
  student2Form!: UntypedFormGroup

  constructor(
    private _studentService: StudentService,
    private router: Router, 
    private formBuilder: FormBuilder,
    private untypedFormBuilder: UntypedFormBuilder) {

    this._studentService.getStudents().subscribe((res) => {
      console.log('STUDENTS JSON: ', res)
    });  


    const { name, age } = this.person;
    let both = [...this.students, ...this.parents];

    this.youtube.subscribe((res) => {
      console.log("SUSCRIBER 1: ", res);
    });


    this.scoreControl.valueChanges.subscribe((res) => {
      console.log('SCORE VALUE OBSERVABLE: ', res)
    })

    this.studentForm = this.formBuilder.group({
      name: ['', Validators.required],
      score: [''],
      school: [''],
      proffesor: [''],
      university: ['']
    })

    this.student2Form = this.untypedFormBuilder.group({
      name: ['', Validators.required],
      score: [''],
      school: [''],
      proffesor: [''],
      university: ['']
    })

    /* this.studentForm = new FormGroup({
      name: new FormControl<string>('sdasdasdasd', [Validators.required]),
      score: new FormControl<string>('sdfsdfsdf'),
      school: new FormControl<string>(''),
      proffesor: new FormControl<string>(''),
      university: new FormControl<string>('')
    }) */

    this.studentForm.valueChanges.subscribe((res) => {
      console.log('FORM GROUP OBSERVABLE: ', res)
    })
  }

  print(){
    console.log('FORM NAME: ', this.studentForm.get('name'))
  }

  onSendData() {
    console.log('FORM GROUP: ', this.studentForm)
  }

  public sumPure(a:number, b:number): number {
    return a + b;
  }

  public sumImpure(a:number, b:number): number {
    return a + b + Math.random();
  }

  public sum(...persons: number[]) {
    //return persons[0] + persons[1]
    return persons.reduce(
      (acumulador, valorActual) => acumulador + valorActual,
      10
    );
  }

  addVideo() {
    this.youtube
      .pipe(
        map((res: number) => {
          //console.log("MAP OPERATOER RXJS: ", res);
          if (res % 2 === 0) {
            return res;
          } else {
            return null
          }
        }),
        tap((res)  => {console.log('VALUE: ', res)}),
        filter((res: number | null) => res !== null),
      )
      .subscribe((res) => {
        console.log("SUSCRIBER 2: ", res);
      });
  }

  public sum2(num1: number, num2: number): number {
    return num1 + num2;
  }

  private subtract(num1: number, num2: number): number {
    return num1 - num2;
  }

  public getArray(): void {
    const persons: number[] = [1, 2, 3, 4, 5];
    for (let i = 0; i < persons.length; i++) {
      //console.log('person =', persons[i])
    }
  }

  public getColor(value:any): void {
    console.log("value: ", value);
  }

  //  function sumar(){
  //   return 1 + 2;
  //  }

  //  const suma = () => {
  //   return 1 + 2
  //  }

  //  function resta(){
  //   return 'hola' + a
  //  }

  // arrow functions
  //  const resta = () => ('hola' + a)

  public receiveData(data: any) {
    console.log("Print in father component: ", data);
  }

  public onResult(event: any) {
    console.log("event from child:", event);
    this.result = event ?? 0;
  }

  public addNumber() {
    this.students = [...this.students, 12]
  }

  public goToStudentModule() {
    this.router.navigate(['student'])
  }

  public goToCard() {
    this.router.navigate(['card', 1])
  }

  public onCalculator(){
    this.router.navigate(['cal'], {queryParams: {name: 'John', age: 20}})
  }
  
  onSubmit(data:any){
    console.log('TEMPLATE DRIVEN FORM: ', data)
  }

  onPrintScore(){
    console.log('SCORE: ', this.scoreControl.value)
  }

}
