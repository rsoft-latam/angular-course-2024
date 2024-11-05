import { Routes } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AuthGuard } from './guards/auth.guard';
import { GuardForm } from './guards/guard-form.guard';
import { LoadGuard } from './guards/load.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'card/:studentId',
        component: UserCardComponent,
        title: 'user card test tilte'
    },
    {
        path: 'cal',
        component: CalculatorComponent,
        canDeactivate: [GuardForm]
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
        canMatch:[LoadGuard],
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
    }
];
