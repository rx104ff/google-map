import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'se-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  constructor(
    private router: Router
  ) {}
}
