import { Component } from '@angular/core';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-classmate',
  templateUrl: './classmate.component.html',
  styleUrl: './classmate.component.scss'
})
export class ClassmateComponent {

  newScores:number[] = []

  constructor(private _examService: ExamService) { 
    this._examService.getScoresAsObservable().subscribe(scores => {
      console.log('SCORES: ', scores)
      this.newScores = scores
    })
  }

}
