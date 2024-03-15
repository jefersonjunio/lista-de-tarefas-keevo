import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-register-task',
  templateUrl: './register-task.component.html',
  styleUrls: ['./register-task.component.css']
})
export class RegisterTaskComponent {
  title = 'Cadastre sua tarefa';
  titleButton = 'Cadastrar';
  loading: boolean = false;

  constructor(private taskService: TaskService, private router: Router) {

  }

  createTask(task: Task) {
    this.taskService.loading$.subscribe((loading) => {
      this.loading = loading;
    });

    this.taskService.CreateTask(task).subscribe(() => {
      this.router.navigate(['']);
    })
  }
}
