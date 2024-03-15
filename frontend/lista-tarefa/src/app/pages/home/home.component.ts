import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  status: Task[] = [];
  statusForm!: FormGroup

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.taskService.GetTasks().subscribe((responseTask) => {
       this.tasks = responseTask.data
       this.status = responseTask.data
    });

    this.statusForm = new FormGroup({
      status: new FormControl(''),
    });
  }

  searchStatus() {
    const status = this.statusForm.value.status;

    switch (status) {
      case 'Concluido':
        this.tasks = this.status.filter(task => task.status === 'Concluido');
        break;
      case 'Inicializado':
        this.tasks = this.status.filter(task => task.status === 'Inicializado');
        break;
      default:
        this.tasks = this.status;
      break;
    }
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
