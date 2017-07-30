import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component'
import {AuthorsComponent} from './authors/authors.component'
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router'

@Component({
    selector: 'my-app',
    template: `<header>
        </header>
        <body>
            <h1>Hello Angular 2</h1>        
            <nav>
                <a [routerLink]="['Authors']">Author Page</a>
                <a [routerLink]="['Courses']">Course Page</a>
            </nav>
            <router-outlet></router-outlet>
        </body>`,
    directives: [CoursesComponent, AuthorsComponent, ROUTER_DIRECTIVES ]
})

// for routing we need to put '<base href="/" />' in index.html and ROUTER_PROVIDER in boot.ts and
// ROUTER_DIRECTIVES, RouteConfig setting and router-outlet in template of this file.
@RouteConfig([
    {path: '/authors', name: 'Authors', component: AuthorsComponent},
    {path: '/courses', name: 'Courses', component: CoursesComponent}
])
export class AppComponent {
    
 }