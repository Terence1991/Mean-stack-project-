import { Component, EventEmitter, Output} from '@angular/core'
import { Post } from 'src/app/post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>()
  onAddPost(form: NgForm) {
    const post: Post = {title: this.enteredTitle, content: this.enteredContent}
  }

}
