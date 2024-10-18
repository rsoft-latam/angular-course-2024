import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './score/score.component';
import { ClassmateComponent } from './classmate/classmate.component';
import { AverageComponent } from './average/average.component';

const routes: Routes = [
  {
    path: '', 
    component: ScoreComponent,
    children: [
      {
        path: 'average',
        component: AverageComponent
      }
    ]
  },
  {
    path: 'classmate',
    component: ClassmateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
