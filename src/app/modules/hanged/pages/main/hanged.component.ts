import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-hanged',
  templateUrl: './hanged.component.html',
  styleUrls: ['./hanged.component.scss'],
})
export class HangedComponent {
  public loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public play(riddle: string) {
    this.loading.next(true);
  }
}
