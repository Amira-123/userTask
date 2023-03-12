import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'user';
  lang: any = 'en';
  storedTheme = localStorage.getItem('theme-color');
  constructor(
    private sharedService: SharedService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    if ('lang' in localStorage) {
      this.lang = localStorage.getItem('lang');
      this.translate.use(this.lang);
    } else {
      this.translate.use(this.translate.defaultLang);
      localStorage.setItem('lang', this.translate.defaultLang);
    }
    this.selectlanguage(this.lang);
  }
  //lang
  selectlanguage(lang: any) {
    this.sharedService.getlang().subscribe((res: any) => {
      localStorage.setItem('lang', lang);
      this.lang = res;
      if ('lang' in localStorage) {
        this.lang = localStorage.getItem('lang');
        this.translate.use(this.lang);
      } else {
        this.translate.use(this.translate.defaultLang);
      }
    });
  }

  //theme
  selectThemeColor(theme: any) {
    this.sharedService.getTheme().subscribe((res: any) => {
      localStorage.setItem('theme-color', theme);
      this.storedTheme = res;
    });
  }
}
