
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  @Input() item:string = '';
  @Input() color:string = 'white';
  @Input() showButtons:boolean = false;
  @Output() actionEvent = new EventEmitter<any>();
  
  onAction(actionType: string) {
    this.actionEvent.emit({
      actionType,
      item: this.item
    });
  }
}
