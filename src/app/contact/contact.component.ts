import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = [
    {
      name: 'Email',
      icon: 'assets/contact/gmail.png',
      link: 'mateusz.suder999@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: 'assets/contact/linkedin.png',
      link: 'https://www.linkedin.com/in/mateusz-suder-8862441b4/'
    },
    {
      name: 'GitHub',
      icon: 'assets/contact/GitHub.png',
      link: 'https://github.com/MateuszSuder'
    },
  ];
}
