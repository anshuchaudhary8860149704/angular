import { Component, OnInit } from '@angular/core';

import { NgForOf } from '@angular/common';
import { UserPlansService } from '../user-plans.service';

@Component({
  selector: 'app-exclusive-offer',
  templateUrl: './exclusive-offer.component.html',
  styleUrls: ['./exclusive-offer.component.css'
]
})
export class ExclusiveOfferComponent implements OnInit {
public edata=[];
public button;

  constructor(private _userplanService:UserPlansService) { }

  ngOnInit() {
    this.edata =this._userplanService.getoffer();
  }
  public cost;
  makepayments(x){
  if(x==1){
    this.cost = 99;
  }
  else if (x==2){
    this.cost = 199;
  }
  else if (x==3){
    this.cost = 597;
  }
  else{
    this.cost = 2388;
  }

  this._userplanService.price=this.cost;

  
  }

 
}
