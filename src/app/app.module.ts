import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

// routing
import { ROUTING } from './app.routing'

// services
import { AuthorService } from './services/author.service'
import { PostsService } from './services/posts.service';
import { CourseService } from './services/course.service'

// directives
import { AutoGrowDirective } from './directives/auto-grow.directive'

// components
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CoursesComponent } from './courses/courses.component'



@NgModule({
  declarations: [
    AppComponent,
    AutoGrowDirective,

    AuthorsComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    HttpModule
  ],
  providers: [
    AuthorService,
    PostsService,
    CourseService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
