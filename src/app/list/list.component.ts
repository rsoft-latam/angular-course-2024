import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input() items: any[] = [];
  @Input() value!: string;
  @Output() loadCard = new EventEmitter<any>();


  onAction(data:any, index:number, item:any) {
    if(data.actionType === 'delete'){
      this.items.splice(index, 1)
    }
    if(data.actionType === 'show') {
        this.loadCard.emit(item)
    }
  }

}
