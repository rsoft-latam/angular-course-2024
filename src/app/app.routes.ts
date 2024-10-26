import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'card/:studentId',
        component: UserCardComponent,
        title: 'user card test tilte'
    },
    {
        path: 'cal',
        component: CalculatorComponent
    },
    {
        path: 'counter-nav',
        loadComponent: () => import('./counter/counter.component').then(c => {
            // we can put more logic here
            return c.CounterComponent
        })
    },
    {
        path: 'student',
        title: 'Student',
        canActivate: [AuthGuard],
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
    }
];
