import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Deal } from '../_models/deal';

@Injectable()
export class DealService {
  // Define the routes we are going to interact with
  private publicDealsUrl = 'http://localhost:3000/api/deals/public';
  private privateDealsUrl = 'http://localhost:3000/api/deals/private';

  constructor(private http: Http) { }

  // Implement a method to get the public deals
  getPublicDeals(): Promise<Deal[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    console.log('getPublicDeals');
    return this.http
      .get(this.publicDealsUrl, options)
      // .map((res: Response) => <Deal[]>(res.json()))
      .toPromise()
      .then(res => { console.log('res:' + res.json()); return res.json() as Deal[]; })
      .catch(this.handleError);
  }

  // Implement a method to get the private deals
  getPrivateDeals(): Promise<Deal[]> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    console.log('getPrivateDeals');
    return this.http
      .get(this.privateDealsUrl, options)
      // .map((res: Response) => <Deal[]>(res.json()))
      .toPromise()
      .then(res => { console.log('res:' + res.json()); return res.json() as Deal[]; })
      .catch(this.handleError);
  }

  // Implement a method to handle errors if any
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
