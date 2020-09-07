import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  bookmarks: string[] = ['About me', 'Skills', 'Projects', 'Contact'];

  constructor() {}

  ngOnInit(): void {}
}
