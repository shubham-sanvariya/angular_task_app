import { ChangeDetectionStrategy, Component, Input, output } from '@angular/core';
import { Task } from '../../Task';

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,NgStyle,NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: Task;
  onDeleteTask = output<Task>();
  onToggleReminder = output<Task>();
  faTimes = faTimes;

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
