import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss'],
})
export class GeneralSettingsComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  public switchLanguage(event: any) {
    this.translate.use(event.target.value);
  }

  public switchThemeMode(event: any) {
    const mode = event.target.checked ? 'dark' : 'light';
    document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', mode);
  }
}
