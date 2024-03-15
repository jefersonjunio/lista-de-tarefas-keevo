import { Component, OnInit } from '@angular/core';
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

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.GetTasks().subscribe((responseTask) => {
       this.tasks = responseTask.data
    });
  }

}
