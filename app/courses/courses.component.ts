import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from '../auto-grow.directive'

@Component({
    selector: 'courses',
    template: `<br/>
        <button (click)="toggleCourses()">{{showCourses ? "Hide Courses" : "Show Course" }}</button>
        <div *ngIf="showCourses">            
            <h2>Courses</h2>
            {{ title }}
            <input type="text" autoGrow />
            <ul>
                <li *ngFor="#course of courses; #i = index">
                    {{ course }} <button (click)="deleteCourse(i)">x</button>
                </li>
            </ul>
            <form (submit)="addCourse(course.value)">
                <label>Add Course</label><br/>
                <input type="text" #course /><br/>
            </form>
        </div>
        `,
        providers: [CourseService],
        directives: [AutoGrowDirective]
})


export class CoursesComponent{
    title = "The title of the courses page";
    courses: string[];
    showCourses: boolean;


    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
        this.showCourses = true;
    }

    toggleCourses(){
        this.showCourses = !this.showCourses;
    }

    addCourse(course){
        this.courses.push(course);
    }

    deleteCourse(id){
        this.courses.splice(id, 1);
    }
}