System.register(['angular2/core', '../authors/author.service', '../authors/posts.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, author_service_1, posts_service_1;
    var AuthorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            }],
        execute: function() {
            AuthorsComponent = (function () {
                function AuthorsComponent(authorService, postsService) {
                    this.postsService = postsService;
                    this.title = "Title for the author page";
                    this.name = "Ashok";
                    this.authors = authorService.getAuthors();
                }
                AuthorsComponent.prototype.getPostsData = function () {
                    var _this = this;
                    this.postsService.getPosts().subscribe(function (_posts) {
                        //console.log(_posts),
                        return _this.posts = _posts;
                    }, function (error) { return alert(error); }, function () { return console.log("finished"); });
                };
                AuthorsComponent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: "<h2> Authors </h2>\n        {{ title }} <br/>\n        <h3>{{ name }}</h3>\n        <ul>\n            <li *ngFor= \"#author of authors\">\n                {{ author }}\n            </li>\n        </ul>\n        <form>\n            <label> Name: </label><br/>\n            <input type=\"text\" name=\"name\" [(ngModel)]=\"name\" />\n        </form>\n        <button (click)=\"getPostsData()\"> Show Posts </button>\n        <div *ngFor=\"#post of posts\">\n            <h3>{{post.id}}  {{ post.title }} </h3>\n            <p>{{ post.body}} <p>\n        </div>\n        ",
                        providers: [author_service_1.AuthorService, posts_service_1.PostsService]
                    }), 
                    __metadata('design:paramtypes', [author_service_1.AuthorService, posts_service_1.PostsService])
                ], AuthorsComponent);
                return AuthorsComponent;
            }());
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map