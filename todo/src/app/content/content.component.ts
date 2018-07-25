import {Component, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  arr = {
    userId: '',
    title: '',
    completed: ''
  };
  list = [];

  constructor(private todo: TodoService) {
  }

  ngOnInit() {
    this.todo.getPost().subscribe((data: any) => {
      this.list = data;
      const a = JSON.stringify(this.list);
      localStorage.setItem('todo', a);
    });
  }

}
