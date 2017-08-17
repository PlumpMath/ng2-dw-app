import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../_services/navbar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
  }
}
