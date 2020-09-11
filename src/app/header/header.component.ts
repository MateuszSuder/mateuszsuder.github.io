import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  bookmarks: string[] = ['About me', 'Skills', 'Projects', 'Contact'];
  idBookmarks: string[] = ['info', 'skill-info', 'projects-info', 'contact-info'];

  scroll(item: string): void{
    document.getElementById(this.idBookmarks[this.bookmarks.indexOf(item)]).scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
