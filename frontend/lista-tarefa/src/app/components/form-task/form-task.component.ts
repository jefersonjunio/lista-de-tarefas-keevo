import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit  {
  @Output() onSubmit = new EventEmitter<Task>();
  @Input() titleButton!: string;
  @Input() titleHeader!: string;
  @Input() dataTask: Task | null = null;

  taskForm!: FormGroup

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      id: new FormControl(this.dataTask ? this.dataTask.id : 0),
      description: new FormControl(this.dataTask ? this.dataTask.description : '', [Validators.required]),
      status: new FormControl(this.dataTask ? this.dataTask.status : 'Inicializado'),
    });

    console.log(this.dataTask?.description);
  }

  submit() {
    this.onSubmit.emit(this.taskForm.value);
  }

}
