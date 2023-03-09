import { Component } from '@angular/core';

type link = { name: string; link: string; isActive: false };
interface Ilink {
  text: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: Ilink[] = [
    { text: 'Characters', link: '/characters' },
    { text: 'Comics', link: '/comics' },
    { text: 'Movies', link: '/movies' },
    { text: 'Series', link: '/series' },
  ];
}
