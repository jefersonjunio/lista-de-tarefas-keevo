import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Task } from '../models/Task';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.ApiUrl}/Task`

  constructor( private http: HttpClient ) { }

  GetTasks() : Observable<Response<Task[]>> {
   return this.http.get<Response<Task[]>>(this.apiUrl);
  }

  CreateTask(task: Task) : Observable<Response<Task[]>> {
    return this.http.post<Response<Task[]>>(`${this.apiUrl}`, task);
  }

  GetTaskById(id: number) : Observable<Response<Task>> {
    return this.http.get<Response<Task>>(`${this.apiUrl}/${id}`);
  }

  EditTask(task: Task) : Observable<Response<Task[]>> {
    return this.http.put<Response<Task[]>>(`${this.apiUrl}`, task);
  }

  DeleteTask(id: number) : Observable<Response<Task[]>> {
    return this.http.delete<Response<Task[]>>(`${this.apiUrl}?id=${id}`);
  }

}
