import { Component } from '@angular/core';
import { NavbarService } from '../_services/navbar.service';

@Component({
  moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent {

  constructor( public navbarService: NavbarService ) {}
}
