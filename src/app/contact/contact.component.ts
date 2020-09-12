import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  baseURL = '';
  contact;
  constructor() {
    if (window.devicePixelRatio < 1.5){
      this.baseURL = 'assets/contact/pixelratio-1/';
    } else if (window.devicePixelRatio < 2.5){
      this.baseURL = 'assets/contact/pixelratio-2/';
    } else {
      this.baseURL = 'assets/contact/pixelratio-3/';
    }
    this.contact = [
      {
        name: 'mateusz.suder999@gmail.com',
        icon: this.baseURL + 'gmail.png',
        link: 'mateusz.suder999@gmail.com'
      },
      {
        name: 'LinkedIn',
        icon: this.baseURL + 'linkedin.png',
        link: 'https://www.linkedin.com/in/mateusz-suder-8862441b4/'
      },
      {
        name: 'GitHub',
        icon: this.baseURL + 'GitHub.png',
        link: 'https://github.com/MateuszSuder'
      },
    ];
  }
}
