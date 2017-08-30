import { Component, OnInit } from '@angular/core';
import { Deal } from '../_models/deal';
// We haven't defined these services yet
import { AuthService } from '../_services/auth.service';
import { DealService } from '../_services/deal.service';

@Component({
  selector: 'app-public-deals',
  templateUrl: './public-deals.component.html',
  styleUrls: ['./public-deals.component.css']
})
export class PublicDealsComponent implements OnInit {
  publicDeals: Deal[];
  error: any;

  constructor(
    private dealService: DealService,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.dealService.getPublicDeals()
      .then(deals => { console.log(deals); this.publicDeals = deals; });
  }

  purchase(item) {
    alert('You bought the: ' + item.name);
  }
}
