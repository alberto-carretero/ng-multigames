import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-puppet',
  templateUrl: './puppet.component.html',
  styleUrls: ['./puppet.component.scss'],
})
export class PuppetComponent implements AfterViewInit {
  @Input() attempts: number = 0;

  @ViewChild('head') head: ElementRef = {} as ElementRef;
  @ViewChild('legRight') legRight: ElementRef = {} as ElementRef;
  @ViewChild('legLeft') legLeft: ElementRef = {} as ElementRef;
  @ViewChild('armRight') armRight: ElementRef = {} as ElementRef;
  @ViewChild('armLeft') armLeft: ElementRef = {} as ElementRef;
  @ViewChild('body') body: ElementRef = {} as ElementRef;

  public loading: boolean = true;

  private urlBase: string = 'assets/images/hanged/';

  async ngAfterViewInit(): Promise<void> {
    if (this.loading) {
      this.head.nativeElement.src = await `${this.urlBase}head.svg`;
      this.legRight.nativeElement.src = await `${this.urlBase}leg-right.svg`;
      this.legLeft.nativeElement.src = await `${this.urlBase}leg-left.svg`;
      this.armRight.nativeElement.src = await `${this.urlBase}arm-right.svg`;
      this.armLeft.nativeElement.src = await `${this.urlBase}arm-left.svg`;
      this.body.nativeElement.src = await `${this.urlBase}body.svg`;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
}
