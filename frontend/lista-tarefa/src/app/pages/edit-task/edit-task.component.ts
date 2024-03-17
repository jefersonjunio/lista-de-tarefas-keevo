import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageComponent } from 'src/app/components/message/message.component';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  titleHeader = 'Editar tarefa';
  titleButton = 'Editar';
  task!: Task;
  loading: boolean = false;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.taskService.loading$.subscribe((loading) => {
      this.loading = loading;
    });


    this.taskService.GetTaskById(id).subscribe((responseTask) => {
      this.task = responseTask.data;
    });
  }

  editTask(task: Task) {
    this.taskService.loading$.subscribe((loading) => {
      this.loading = loading;
    });

    this.taskService.EditTask(task).subscribe((response) => {
      if(response.success === false) {
        this.openDialog(response.message);
      }

      this.router.navigate(['/']);
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
