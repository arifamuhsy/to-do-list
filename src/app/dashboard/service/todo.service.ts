import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // constructor(private httpClient: HttpClient) { }
  // baseUrl: String = '';
  // getAllTodo(): Observable<Subject[]>{
  //   return this.httpClient.get<Subject[]>(`${this.baseUrl+"/todo"}`);
  // }
  constructor() { }
}
