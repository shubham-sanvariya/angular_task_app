import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title: string = 'Task App';
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

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
}
