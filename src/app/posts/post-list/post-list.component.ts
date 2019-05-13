import { Component, Input } from '@angular/core';
import { Post } from 'src/app/post.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})

export class PostListComponent {
  @Input() posts: Post[] = [];


  constructor(public postService: PostService) {

  }
}
