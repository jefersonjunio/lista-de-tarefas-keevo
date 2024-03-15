import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css']
})
export class DeleteTaskComponent implements OnInit {
  inputData: any;
  task!: Task;
  loading: boolean = false;

  constructor (
    private taskService: TaskService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref:MatDialogRef<DeleteTaskComponent>
  ) {}

  ngOnInit(): void {
    this.taskService.loading$.subscribe((loading) => {
      this.loading = loading;
    });

    this.inputData = this.data;
    this.taskService.GetTaskById(this.inputData.id).subscribe((responseTask) => {
      this.task = responseTask.data;
    });
  }

  delete() {
    this.taskService.loading$.subscribe((loading) => {
      this.loading = loading;
    });

    this.taskService.DeleteTask(this.inputData.id).subscribe(() => {
      this.ref.close();
      window.location.reload();
    });
  }

  back() {
    this.ref.close();
  }
}
