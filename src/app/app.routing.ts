import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component'
import { CoursesComponent } from './courses/courses.component'

const appRoutes: Routes = [
    {
        path: 'authors',
        component: AuthorsComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];

export const ROUTING = RouterModule.forRoot(appRoutes);
