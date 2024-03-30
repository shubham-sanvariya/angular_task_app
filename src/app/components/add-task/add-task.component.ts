import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  onAddTask = output<Task>();
  text : string = '';
  day : string = '';
  reminder : boolean = false;

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
