import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';
import { data } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, CardComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-course-2024';

  private _items: any[] = []
  items: any[] = []

  selectedCard:any;
  cardData:any = {
    messages: [],
    data: []
  }

  constructor() {
    Object.entries(data).forEach(([key, value]:any) => {
      this._items.push({
        id: key, 
        ...value, 
        generalScore: (value.firstTestScore + value.secondTestScore + value.finalTestScore) / 3,
        completeData: value.name + value.lastName + value.type,
        completeAddress: value.address.zone + value.address.street + value.address.number
      })
    })
    this.items = this._items
  }

  onSearchList(text:any) {
    this.items = this._items.filter((item:any) => item.completeData.includes(text))
  }

  loadCards(data:any) {
    this.selectedCard = data
    this.cardData.messages = data.messages
    this.cardData.data = data.data
  }

  loadPersonal(){
    this.cardData.messages = null
    let auxData:any = [
      {title: 'name', value: this.selectedCard.name},
      {title: 'lastName', value: this.selectedCard.lastName},
      {title: 'type', value: this.selectedCard.type},
    ]

    if(this.selectedCard.type === 'student'){
      auxData.push({title: 'generalScore', value: this.selectedCard.generalScore})
    } else {
      auxData.push({title: 'subject', value: this.selectedCard.subject})
    }
    this.cardData.data = auxData
  }
  loadGeographic(){
    this.cardData.messages = null
    this.cardData.data = [
      {title: 'address', value: this.selectedCard.completeAddress},
      {title: 'country', value: this.selectedCard.country},
      {title: 'province', value: this.selectedCard.province},
    ]

  }
  loadMessages(){
    this.cardData.messages = this.selectedCard.messages
    this.cardData.data = null
  }

}
