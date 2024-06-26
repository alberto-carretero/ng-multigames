import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'multigames';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  public switchLanguage(event: any) {
    this.translate.use(event.target.value);
  }
}
