import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoUrl: string = `${environment.actionsBaseUrl}/api/v1/todos`;

  constructor(private _http: HttpClient) {}

  addTodo(newTodo: any): Observable<any> {
    console.log('iinside addTodo', { newTodo });
    return this._http.post(this.todoUrl, newTodo);
  }

  getTodos(): Observable<any> {
    return this._http.get(this.todoUrl);
  }

  getTodo(id: string): Observable<any> {
    return this._http.get(this.todoUrl + `/${id}`);
  }

  updateTodo(id: string, obj): Observable<any> {
    return this._http.patch(this.todoUrl + `/${id}`, obj);
  }

  deleteTodo(id: string): Observable<any> {
    return this._http.delete(this.todoUrl + `/${id}`);
  }
}
