import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrl: './average.component.scss'
})
export class AverageComponent {


  constructor(private _authService: AuthService) { }

  onPrint(){
    console.log('LOGGED USER: ', this._authService.getUser())
  }

}
