import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  list = [];
  show = false;
  postObject = {
    userId: '',
    title: '',
    body: ''
  };
  button = 'add';
  idProcessing = null;

  constructor(private postService: PostService) {
  }

  addPost() {
    this.show = !this.show;
    this.button = 'add';
  }

  onAdd() {
    this.postService.addPost(this.postObject).subscribe((data: any) => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.postService.getList().subscribe((data: any) => {
      this.list = data;
    });
  }

  onUpdate(item) {
    this.show = true;
    this.button = 'update';
    this.idProcessing = item.id;
    this.postObject.body = item.body;
    this.postObject.userId = item.userId;
    this.postObject.title = item.title;
  }

  onSubmitUpdate() {
    this.postService.updatePost(this.idProcessing, this.postObject).subscribe((res: any) => {
      this.list.forEach(items => {
        if (items.id == res.id) {
          items.title = res.title;
          items.body = res.body;
          items.use = res.userId;
        }
      });
      this.show = false;
    });
  }

  onDelete(id: number) {
    console.log(id);
    this.postService.deletePost(id).subscribe((res: any) => {
      console.log(res);
    });
  }
}
