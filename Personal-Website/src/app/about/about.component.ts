import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  years = new Date().getFullYear() - 2016;
  skills = ['Angular', 'Java', 'PostgreSQL'];
}
