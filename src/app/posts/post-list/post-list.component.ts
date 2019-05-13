import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})

export class PostListComponent implements OnInit, OnDestroy {

  @Input() posts: Post[] = [];
  private postSub: Subscription;


  constructor(public postService: PostService) {

  }

  ngOnInit() {
    this.posts = this.postService.getPosts()
    this.postSub =  this.postService.getPostsUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
