import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  onAddTask = output<Task>();
  text : string = '';
  day : string = '';
  reminder : boolean = false;
  showAddTask : boolean = false;
  subscription : Subscription | undefined;

  constructor(private uiService : UiService){
    this.subscription = this.uiService
    .onToggle()
    .subscribe({
      next : (value) => {this.showAddTask = value},
      error : (error) => {console.log(error)}
    })
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
