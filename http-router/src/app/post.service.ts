import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  id: number;
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private  a: HttpClient) {
  }

  getList(): Observable<any> {
    return this.a.get(this.apiUrl);
  }
  getList2(id): Observable<any> {
    return this.a.get(`${this.apiUrl}/${id}`);
  }
  addPost(postObject): Observable<any> {
    return this.a.post<any>(this.apiUrl, postObject, this.httpOptions);
  }

  updatePost(id, postObject): Observable<any> {
    return this.a.put<any>(`${this.apiUrl}/${id}`, postObject, this.httpOptions);
  }

  deletePost(id: number): Observable<{}> {
    return this.a.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }

}
