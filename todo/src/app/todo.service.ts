import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Todo} from './class/Todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[];
  url = './assets/champions.json';

  constructor(private http: HttpClient) {
  }

  getPost(): Observable<any> {
    return this.http.get(this.url);
  }
}
