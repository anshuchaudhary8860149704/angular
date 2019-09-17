import { Component, OnInit } from '@angular/core';
import { StylesummaryService } from '../userData.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-style-summary',
  templateUrl: './style-summary.component.html',
  styleUrls: ['./style-summary.component.css']
})
export class StyleSummaryComponent implements OnInit {
  
public sdata;
public user;
public myvar = true;
public myid;
public empty="--";
public error =[{"id":0,"name":"--","height":"--","dressSize":"--","topSize":"--","pantSize":"--","topHalf":"--","bottomHalf":"--","Flaunt":"--"
, "downPlay":"--","focus":"--","incorporate":"--","avoid":"--"}
];
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
            this.myvar=false;
            
            
            if(this.user.avoid_prints==""){
              this.user.avoid_prints=this.empty;
            }
            
          }
          else{
            if(!this.user){
            this.user=data[0];
            this.myvar = true;
            
              
            }
          }
         
          
         
          
        })
        
      })
        
  }
  

  

}
