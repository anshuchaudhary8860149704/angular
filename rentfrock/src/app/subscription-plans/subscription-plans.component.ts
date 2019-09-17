import { Component, OnInit } from '@angular/core';

import { UserPlansService } from '../user-plans.service';

@Component({
  selector: 'app-subscription-plans',
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.css']
})
export class SubscriptionPlansComponent implements OnInit {
public data = [];
  constructor(private _userplanService:UserPlansService) { }

  ngOnInit() {
    this.data = this._userplanService.getdata();
   
    
  } 
 
 
  

}
