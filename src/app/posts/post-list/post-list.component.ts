import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})

export class PostListComponent {
  posts = [
    {title: 'first-post,' content: 'this is the first post'}
  ]
}
