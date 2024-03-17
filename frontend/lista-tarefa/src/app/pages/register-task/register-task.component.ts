import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageComponent } from 'src/app/components/message/message.component';
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
  responseMessage: string = '';

  constructor(private taskService: TaskService, private router: Router, public dialog: MatDialog) {}

  createTask(task: Task) {
    this.taskService.loading$.subscribe((loading) => {
      this.loading = loading;
    });

    this.taskService.CreateTask(task).subscribe((response) => {
      this.router.navigate(['']);
      this.responseMessage = response.message;
      if(response.success === false) {
        this.openDialog(this.responseMessage);
      }
    })
  }

  openDialog(message: string) {
    this.dialog.open(MessageComponent, {
      width: '350px',
      height: '250px',
      data: message
    });
  }
}
