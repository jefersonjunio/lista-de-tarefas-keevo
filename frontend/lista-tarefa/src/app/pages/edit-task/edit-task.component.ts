import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.taskService.GetTaskById(id).subscribe((responseTask) => {
      this.task = responseTask.data;
    });
  }

  editTask(task: Task) {
    this.taskService.EditTask(task).subscribe(() => {
      this.router.navigate(['/']);
    })
  }
}
