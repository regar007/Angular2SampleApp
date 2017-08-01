import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service'
import { PostsService } from '../services/posts.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

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

  ngOnInit() {
  }

}

interface Post{
    id: number;
    title: string;
    body: string
}