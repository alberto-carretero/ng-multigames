import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguagesEnum } from 'src/app/models/enums';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss'],
})
export class GeneralSettingsComponent implements OnInit {
  public selectedLanguage: string = '';
  public languages = LanguagesEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.selectedLanguage = localStorage.getItem('language') ? localStorage.getItem('language')! : LanguagesEnum.ES;
  }

  public switchLanguage(event: any) {
    this.translate.use(event.target.value);
    localStorage.setItem('language', event.target.value);
  }

  // public switchThemeMode(event: any) {
  //   const mode = event.target.checked ? 'dark' : 'light';
  //   document.getElementsByTagName('html')[0].setAttribute('data-bs-theme', mode);
  // }
}
