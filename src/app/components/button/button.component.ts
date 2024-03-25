import { NgStyle } from '@angular/common';
import { Component,Input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  btnclick = output();

  onClick(){
    this.btnclick.emit();
  }
}
