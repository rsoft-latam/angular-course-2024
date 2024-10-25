import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ExamService {

  private scores$ = new BehaviorSubject<number[]>([])

  constructor() { }

  public sendNewScore(scores: number[]):void{
    this.scores$.next(scores)
  }

  public getScoresAsObservable():Observable<number[]>{
    return this.scores$.asObservable()
  }

}
