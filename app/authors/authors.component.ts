import {Component} from 'angular2/core'
import {AuthorService} from '../authors/author.service'
import {PostsService} from '../authors/posts.service'

@Component({
    selector: 'authors',
    template: `<h2> Authors </h2>
        {{ title }} <br/>
        <h3>{{ name }}</h3>
        <ul>
            <li *ngFor= "#author of authors">
                {{ author }}
            </li>
        </ul>
        <form>
            <label> Name: </label><br/>
            <input type="text" name="name" [(ngModel)]="name" />
        </form>
        <button (click)="getPostsData()"> Show Posts </button>
        <div *ngFor="#post of posts">
            <h3>{{post.id}}  {{ post.title }} </h3>
            <p>{{ post.body}} <p>
        </div>
        `,
    providers: [AuthorService, PostsService]
    
})

export class AuthorsComponent {
    title = "Title for the author page";
    name = "Ashok";
    authors;
    posts : Post[];

    constructor(authorService: AuthorService, private postsService: PostsService){
        this.authors = authorService.getAuthors();
    }

    getPostsData(){
        this.postsService.getPosts().subscribe(_posts =>  
            //console.log(_posts),
            this.posts = _posts,
            error => alert(error),
            () => console.log("finished") 
        );        
    }
}

interface Post{
    id: number;
    title: string;
    body: string
}