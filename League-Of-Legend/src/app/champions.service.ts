import {Injectable, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  private url = './assets/champ.json';

  constructor(private http: HttpClient) {
  }

  geturl(): Observable<any> {
    return this.http.get(this.url);
  }

  onAdd(data): Observable<any> {
    return this.http.post(this.url, data, this.httpOptions);
  }

}
