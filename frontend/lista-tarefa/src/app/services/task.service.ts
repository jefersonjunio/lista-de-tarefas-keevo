import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, finalize } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Task } from '../models/Task';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${environment.ApiUrl}/Task`
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor( private http: HttpClient ) { }

  private setLoading(loading: boolean) {
    this.loadingSubject.next(loading);
  }

  private startLoading() {
    this.setLoading(true);
  }

  private stopLoading() {
    this.setLoading(false);
  }

  GetTasks() : Observable<Response<Task[]>> {
    this.startLoading();
    return this.http.get<Response<Task[]>>(this.apiUrl).pipe(
      finalize(() => {
        this.stopLoading();
      })
    );
  }

  CreateTask(task: Task) : Observable<Response<Task[]>> {
    this.startLoading();
    return this.http.post<Response<Task[]>>(`${this.apiUrl}`, task).pipe(
      finalize(() => {
        this.stopLoading();
      })
    );
  }

  GetTaskById(id: number) : Observable<Response<Task>> {
    this.startLoading();
    return this.http.get<Response<Task>>(`${this.apiUrl}/${id}`).pipe(
      finalize(() => {
        this.stopLoading();
      })
    );;
  }

  EditTask(task: Task) : Observable<Response<Task[]>> {
    this.startLoading();
    return this.http.put<Response<Task[]>>(`${this.apiUrl}`, task).pipe(
      finalize(() => {
        this.stopLoading();
      })
    );;
  }

  DeleteTask(id: number) : Observable<Response<Task[]>> {
    this.startLoading();
    return this.http.delete<Response<Task[]>>(`${this.apiUrl}?id=${id}`).pipe(
      finalize(() => {
        this.stopLoading();
      })
    );;
  }

}
