import { Component } from '@angular/core';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Daniel Peterson';
  theme = sessionStorage.getItem('theme');
  isChecked = false;

  ngOnInit() {
    if (this.theme === "dark") {
      document.documentElement.setAttribute('data-theme', 'dark');
      sessionStorage.setItem('theme', 'dark');
      this.isChecked = false;
    } else if (this.theme === "light") {
      document.documentElement.setAttribute('data-theme', 'light');
      sessionStorage.setItem('theme', 'light');
      this.isChecked = true;
    }
  }

  modeSwitcher() {
    let theme = sessionStorage.getItem('theme');
    if (theme === "dark") {
      document.documentElement.setAttribute('data-theme', 'light');
      sessionStorage.setItem('theme', 'light');
    }	else if (theme === "light") {
      document.documentElement.setAttribute('data-theme', 'dark');
      sessionStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      sessionStorage.setItem('theme', 'dark');
    }
  }
}
