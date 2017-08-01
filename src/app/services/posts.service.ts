import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

// add Http Providers in app.component.ts and script link to index.html also
@Injectable()
export class PostsService {

    constructor(private http: Http){
        console.log("post service initialized");
    }

    getPosts(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
        .map(res => res.json());
    }

}
