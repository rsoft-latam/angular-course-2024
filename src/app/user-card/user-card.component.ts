import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input() name:string = ''
  @Input() email:string = ''

  @Output() sendData: any


}
