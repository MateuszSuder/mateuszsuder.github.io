import { Component } from '@angular/core';
import { trigger, style, transition, animate, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        query('.bookmark', style({ opacity: 0 })),
        query('#inner-info > h1, .name', style({ opacity: 0 })),
        query('#inner-info > h2', style({ opacity: 0 })),
        query('#info-text, #skill-text, .description, #contact-text', style({ opacity: 0 })),
        query('#header-container, #skills-frame, .preview, .project-bottom, #contact-list', style({opacity: 0})),

        query('.bookmark', animate(500, style({ opacity: 1 }))),
        query('h1, .name', animate(700, style({ opacity: 1 }))),
        query('h2', animate(500, style({ opacity: 1 }))),
        query('#info-text, #skill-text, .description, #contact-text, #contact-list', animate(1000, style({ opacity: 1 }))),
        query('#header-container, #skills-frame, .preview, .project-bottom', animate(1500, style({ opacity: 1 }))),
      ])
    ])
  ]
})
export class AppComponent {}
