import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPlansService {
public price;

  constructor() { }
  getdata(){
    
    return [
      {"plan":"Plan 1","rentpieces":4,"swap":1,"totalpieces":5,"price":99,"popupmsg":"A swap means that once a month, you can send back 1 piece of your 4 piece box and receive something different. Whether it’s because you want something new or you’re just not in love with one of the items, a swap gives you flexibility and more variety."},
      {"plan":"Plan 2","rentpieces":6,"swap":1-6,"totalpieces":12,"price":199,"popupmsg":"A swap means that once a month, you can send back 1-6 pieces of your 6 piece box and receive something different. Whether it’s because you want something new or you’re just not in love with some of the items, a swap gives you flexibility and more variety."}
    ];
  }
  getoffer(){
    return[
      {"month":1,"monthplan":99,"yousave":29.95,"totalpieces":"4-5","shipping":1,"insurance":1,"yourprice":99,"regularprice":128.95},
      {"month":1,"monthplan":199,"yousave":29.95,"totalpieces":"6-12","shipping":1,"insurance":1,"yourprice":199,"regularprice":228.95,"class":"three_card1"},
      {"month":3,"monthplan":199,"yousave":359.40,"totalpieces":"18-36 ","shipping":3,"insurance":3,"plus":"PLUS","extramonth":"9 Extra months of","fship":"Free shipping","finsurance":"Free insurance","spg":"Subscription price guarantee*","yourprice":597,"regularprice":956.40,"undermsg": "*you are not subject to any price increases for 12 months from date of first shipment","img":"../../assets/img/star.jpg"},
      {"month":12,"monthplan":199,"yousave":1078.20,"totalpieces":"72-144 ","shipping":12,"insurance":12,"plus":"PLUS","extramonth":"24 Extra months of","fship":"Free shipping","finsurance":"Free insurance","spg":"Subscription price guarantee*","yourprice":2388,"regularprice":3566.20,"undermsg":"*you are not subject to any price increases for 36 months from date of first shipment","img":"../../assets/img/star.jpg"}
   
    ];
  
  }
  
  
  getpayment(){
    return[
      {"inputname":"Full Name"},
      {"inputname":"Billing Address"},
      {"inputname":"City"}
    ];
  }
  
}
