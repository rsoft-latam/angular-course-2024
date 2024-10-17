import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';

export const routes: Routes = [
    {
        path: 'card',
        component: UserCardComponent
    },
    {
        path: 'cal',
        component: CalculatorComponent
    },
    {
        path: 'counter-nav',
        loadComponent: () => import('./counter/counter.component').then(c => c.CounterComponent)
    },
    {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
    }
];
