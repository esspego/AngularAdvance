import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ElementRef } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService) { }
  ngOnInit(): void {
    this.putCheck();
  }

  changeTheme(theme: string, link: any): any{
    this.addCheck( link );
    this._settings.aplyTheme(theme);

  }
  addCheck(link: any){
    let selectors: any = document.getElementsByClassName('selector');
    for (let ref of selectors){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
  putCheck(){
    let selectors: any = document.getElementsByClassName('selector');
    const theme = this._settings.settings.theme;
    for (let ref of selectors){
      if(ref.getAttribute('data-theme')=== theme){
        ref.classList.add('working');
        break;
      }
    }
  }
}
