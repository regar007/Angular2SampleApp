// add Http Providers in app.component.ts and script link to index.html also

import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'
import 'rxjs/add/operator/map'

@Injectable()
export class PostsService{
    constructor(private http: Http){
        console.log("post service initialized");
    }

    getPosts(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
        .map(res => res.json());
    }
}