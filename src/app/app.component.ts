import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesEnum } from './models/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    const defaultLanguage = LanguagesEnum.ES;
    this.translate.setDefaultLang(defaultLanguage);
    localStorage.setItem('language', defaultLanguage);
  }
}
