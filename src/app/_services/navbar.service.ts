import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  hidden: boolean;

  constructor() { this.hidden = false; }

  hide() { this.hidden = true; }

  show() { this.hidden = false; }

  toggle() { this.hidden = !this.hidden; }
}
