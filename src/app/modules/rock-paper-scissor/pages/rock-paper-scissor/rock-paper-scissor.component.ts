import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-rock-paper-scissor',
  templateUrl: './rock-paper-scissor.component.html',
  styleUrls: ['./rock-paper-scissor.component.scss'],
})
export class RockPaperScissorComponent implements OnInit {
  public optionImageUrls: string[] = ['rock', 'paper', 'scissors'];
  public result!: string;
  public userPoints: number = 0;
  public comPoints: number = 0;

  public loading: BehaviorSubject<boolean> = new BehaviorSubject(true);

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
  }
}
