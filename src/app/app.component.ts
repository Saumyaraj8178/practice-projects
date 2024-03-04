import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'timer-app';
  time = 0;
  interval: NodeJS.Timeout | undefined;

  onStart() {
    if (this.interval) return;
    this.interval = setInterval(() => {
      this.time = this.time + 1;
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
    this.interval = undefined;
  }
}
