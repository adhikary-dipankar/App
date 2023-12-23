import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'MY';
  document.addEventListener('DOMContentLoaded', function () {
  const menuIcon: HTMLElement | null = document.getElementById('menu-icon');
  const navLinks: HTMLElement | null = document.getElementById('nav-links');

  if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', function () {
      navLinks.style.display = (navLinks.style.display === 'none' || navLinks.style.display === '') ? 'block' : 'none';
    });
  }
});

}
