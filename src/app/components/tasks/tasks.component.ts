import { Component } from '@angular/core';
import { Task } from '../../Task';
import { NgFor } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor,TaskItemComponent,AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];
  handler = {
    next: (tasks: Task[]) => { 
      this.tasks = structuredClone(tasks)
     },
    error: (error:Error) => { console.log(error) }
  };
  constructor(private taskService : TaskService){
    this.taskService.getTasks()
      .subscribe({
        next : (tasks) => {this.tasks = tasks},
        error : (error) => {console.log(error)}
      });
  }

  deleteTask(task : Task){
    this.taskService.deleteTask(task)
    .subscribe({
      next: () => {
        console.log("deleted successfully");
        this.taskService.getTasks()
          .subscribe(this.handler); 
      }, 
      error: (error) => { console.log(error)}
    })
  }

  toggleReminder(task : Task){
    task.reminder = !task.reminder;
    console.log(task.reminder);
    this.taskService.updateTaskReminder(task)
    .subscribe({
      next: () => {console.log("task updated")},
      error: (error) => {console.log(error)}
    })
  }

  addTask(task : Task) {
    this.taskService.addTask(task)
    .subscribe({
      next: () => {
        this.taskService.getTasks()
        .subscribe(this.handler);
      },
      error: (error) => {console.log(error)}
    })
  }
}
