import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "user-card",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.scss",
})
export class UserCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit
{
  @Input() name: string = "";
  @Input() email: string = "";

  @Output() sendData = new EventEmitter();

  @ViewChild('buttonTest') buttonTest!: ElementRef

  password: string = "";
  showButton:boolean = false

  constructor() {
    console.log("user card constructor");
  }

  ngOnInit(): void {
    console.log("user card on init");

    // this.password = this.name + ' ' +  this.email + ' PASSWORD'
  }

  ngOnDestroy(): void {
    console.log("user card Destroy");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("CHANGES:", changes);

    this.password =
      changes["name"].currentValue +
      " " +
      changes["email"].currentValue +
      " PASSWORD";
  }

  ngDoCheck(): void {
    console.log("DO CHECK user card");
  }

  ngAfterContentInit(): void {
    console.log("NG AFTER CONTENT INIT");
  }

  ngAfterViewInit(): void {
    console.log('NG AFTER VIEW INIT')
    console.log('BUTTON TEST', this.buttonTest)   
    this.buttonTest.nativeElement.textContent = 'aaaaaaaaaaaaaaaaaaaaaa'
  }

  public onSendData() {
    //console.log('onSendData in child')
    this.sendData.emit("Hi from child component");
  }
}
