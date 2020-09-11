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
        query('h1', style({ opacity: 0 })),
        query('h2', style({ opacity: 0 })),
        query('#info-text, #skill-text', style({ opacity: 0 })),
        query('#header-container, #skills-frame', style({opacity: 0})),

        query('.bookmark', animate(500, style({ opacity: 1 }))),
        query('h1', animate(700, style({ opacity: 1 }))),
        query('h2', animate(700, style({ opacity: 1 }))),
        query('#info-text, #skill-text', animate(1000, style({ opacity: 1 }))),
        query('#header-container, #skills-frame', animate(1500, style({ opacity: 1 }))),
      ])
    ])
  ]
})
export class AppComponent {}
