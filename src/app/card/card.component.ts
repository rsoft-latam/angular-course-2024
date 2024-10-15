import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ItemComponent } from '../item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SearchComponent, ItemComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnChanges {

  @Input() messages!: string[];
  @Input() data!: any[];
  private _messages: any[] = []

  onSearch(text:any) {
    this.messages = this._messages.filter((value:any) => value.includes(text))
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['messages'] && changes['messages'].currentValue) {
        this._messages = [...this.messages]
      }
  }

}
