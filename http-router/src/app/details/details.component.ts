import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Observable} from 'rxjs/index';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  arr2 = [];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  arr = {
    id: '',
    userId: '',
    title: '',
    body: ''
  };
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private http: HttpClient) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
     this.postService.getList2(id).subscribe((data: any)=>{
       this.arr = data;
     });
  }
}
