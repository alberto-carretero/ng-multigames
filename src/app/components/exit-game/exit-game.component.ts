import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-exit-game',
  templateUrl: './exit-game.component.html',
  styleUrls: ['./exit-game.component.scss'],
})
export class ExitGameComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/home']);
  }
}
