import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 50) { 
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
