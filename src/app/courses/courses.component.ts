import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "The title of the courses page";
  courses: string[];
  showCourses: boolean;


  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
    this.showCourses = true;
  }

  toggleCourses() {
    this.showCourses = !this.showCourses;
  }

  addCourse(course) {
    this.courses.push(course);
  }

  deleteCourse(id) {
    this.courses.splice(id, 1);
  }

  ngOnInit() {
  }

}
