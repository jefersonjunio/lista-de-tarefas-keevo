import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTaskComponent } from 'src/app/components/delete-task/delete-task.component';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  columns = ['Status', 'Descrição', 'Editar', 'Excluir'];
  tasks: Task[] = [];

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.taskService.GetTasks().subscribe((responseTask) => {
       this.tasks = responseTask.data
    });
  }

  openDialog(id: number) {
    this.dialog.open(DeleteTaskComponent, {
      width: '350px',
      height: '250px',
      data: {
        id: id,
      }
    });
  }

}
