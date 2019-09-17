import { Component, OnInit } from '@angular/core';
import { StylesummaryService } from '../userData.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-welcome-box',
  templateUrl: './welcome-box.component.html',
  styleUrls: ['./welcome-box.component.css']
})
export class WelcomeBoxComponent implements OnInit {
  public sdata;
  public user;
  public myvar = true;
  public myid;
  constructor(private _stylesummaryService:StylesummaryService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(
      
      id=>{this.myid=id[0].path;  }
    )
    
  

      this._stylesummaryService.getData().subscribe(data=>{
       
       this.sdata=data;
               this.sdata.forEach(ele=>{
                  if(ele.id==this.myid){
            this.user=ele;
            this.myvar = false;
            sessionStorage.setItem("user",this.myid);
           
            
          }
          else{
            if(!this.user){
            this.user=data[0];
            this.myvar = true;
            sessionStorage.removeItem("user");
            
              
            }
          }
         
          
         
          
        })
        
      })
        
  }


}
