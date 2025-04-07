import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports : [CommonModule],
  template: `
  <button
  class="square"
    [ngClass]="{ 'clicked': isClicked, 'highlight': highlight }"
    (click)="onClick()">
    {{ value }}
  </button>


  `,
  styles: [`
  .square {
    width: 100px;
    height: 100px;
    font-size: 2rem;
    font-weight: bold;
    border: 2px solid #444;
    background-color: #f0f0f0;
    transition: transform 0.2s ease-in-out, background-color 0.3s;

    &:not(.highlight):hover {
      background-color: #ddd;
      transform: scale(1.05);
    }

    &.highlight {
      background-color: #90ee90;
      border-color: #28a745;
      box-shadow: 0 0 10px #28a745;
    }
  }


  .clicked {
    animation: pop 0.2s ease;
  }

  @keyframes pop {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  `]
})
export class SquareComponent 
{
  @Input() highlight: boolean = false;
  @Input() value: 'X' | 'O' | null = null;
  @Output() squareClick = new EventEmitter<void>();
  isClicked=false;


  onClick() {
    this.isClicked = true;
    setTimeout(() => (this.isClicked = false), 150);
    this.squareClick.emit();
  }

}
