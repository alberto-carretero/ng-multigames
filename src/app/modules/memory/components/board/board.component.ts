import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { MemoryModeType } from '../../models/enums';

@Component({
  selector: 'app-memory-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoryBoardComponent implements OnInit, OnDestroy {
  @Input() mode: MemoryModeType = MemoryModeType.NORMAL;

  @Output() back: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isFinished: EventEmitter<boolean> = new EventEmitter<boolean>();

  public gameMode = MemoryModeType;

  public time: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.time.next(this.getTime());

    this.subscriptions.add(
      interval(1000).subscribe(() => {
        this.time.next(this.time.getValue() - 1);
      }),
    );

    this.subscriptions.add(
      this.time.subscribe((secondsToEnd) => {
        if (secondsToEnd <= 0) this.isFinished.emit(true);
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public goBack() {
    this.back.emit(true);
  }

  private getTime(): number {
    return (
      {
        [MemoryModeType.EASY]: 45,
        [MemoryModeType.NORMAL]: 60,
        [MemoryModeType.HARD]: 90,
      }[this.mode] ?? 60
    );
  }
}
