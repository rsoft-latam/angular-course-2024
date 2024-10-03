import { Component, afterRender, afterNextRender } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  sum: number = 0

  constructor() {
    afterRender(() => {
      console.log('AFTER RENDER: ', this.sum)
    })

    afterNextRender(() => {
      console.log('AFTER NEXT RENDER: ', this.sum)
    })
  }

}
