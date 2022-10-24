import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task = {
    title: '',
    description: '',
    status: false
  };
  constructor(private taskService: TasksService) { }
  id=1;
  ngOnInit(): void {
   this. retrieveTask()
  }
  retrieveTask(): void {
    this.taskService.get(this.id)
      .subscribe(
        data => {
          this.task.title = data['title'];
          this.task.description = data['description'];
          this.task.status = data['status'];

          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  saveTask(): void {
    const data = {
      title: this.task.title,
      description: this.task.description,
      status:this.task.status
    };

    this.taskService.update(this.id,data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }  

}
