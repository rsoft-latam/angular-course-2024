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
  appBackground: string = 'red'

  constructor() {
    afterRender({
      write:() => {
        console.log('INTO write')
        document.body.style.backgroundColor = this.appBackground

        const currentColor = this.appBackground
        if(currentColor === 'red') {
          this.appBackground = 'blue'
        } else {
          this.appBackground = 'red'
        }

        return 'FROM write: ' + this.appBackground
      },
      read:(props) => {
        console.log('INTO read ', props)
        const newBackground = this.appBackground
        console.log('FROM read: ', newBackground)
      },
  })

    afterNextRender(() => {
      console.log('AFTER NEXT RENDER: ', this.sum)
    })
  }

}
