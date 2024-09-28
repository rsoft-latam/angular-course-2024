import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input() name:string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter()

  public onSendData(){
    //console.log('onSendData in child')
    this.sendData.emit('Hi from child component')
  }

}
