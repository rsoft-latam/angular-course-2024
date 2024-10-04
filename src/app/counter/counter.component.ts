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
      earlyRead: () => {
        console.log('INTO earlyRead')
        const currentAppColor = this.appBackground
        return 'From earlyRead: ' + currentAppColor
      },
      mixedReadWrite: (props) => {
        console.log('INTO mixedReadWrite ', props)
        if(props.indexOf('red') > -1) {
          this.appBackground = 'green'
        } else {
          this.appBackground = 'red'
        }
        return 'From mixedReadWrite: ' + this.appBackground
      },
      write:(props) => {
        console.log('INTO write ', props)
        document.body.style.backgroundColor = this.appBackground
        return 'FROM write: ' + this.appBackground
      },
      read:(props) => {
        console.log('INTO read ', props)
        const newBackground = this.appBackground
      },
  })

    afterNextRender(() => {
      console.log('AFTER NEXT RENDER: ', this.sum)
    })
  }

}
