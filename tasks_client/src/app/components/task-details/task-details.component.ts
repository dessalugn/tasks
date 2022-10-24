import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  currentTask = null;
  message = '';

  constructor(    private taskService: TasksService,    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTask(this.route.snapshot.paramMap.get('id'));
  }

  getTask(id): void {
    this.taskService.get(id)
      .subscribe(
        data => {
          this.currentTask = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateStatus(status): void {
    const data = {
      title: this.currentTask.title,
      description: this.currentTask.description,
      status: status
    };

    this.taskService.update(this.currentTask.id, data)
      .subscribe(
        response => {
          this.currentTask.status = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTask(): void {
    this.taskService.update(this.currentTask.id, this.currentTask)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The task was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTask(): void {
    this.taskService.delete(this.currentTask.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/Tasks']);
        },
        error => {
          console.log(error);
        });
  }
}
