import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.chargeSettings();
  }
  saveSettings(){
    localStorage.setItem('settings', JSON.stringify(this.settings))
  }
  chargeSettings(){
    let settings = localStorage.getItem('settings');
    if (settings){
      this.settings = JSON.parse(settings);
      this.aplyTheme(this.settings.theme)
    }
  }
  aplyTheme(theme: string){
    const url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.settings.theme = theme;
    this.settings.themeUrl = url;

    this.saveSettings();

  }
}
interface Settings {
  themeUrl: string;
  theme: string;
}
