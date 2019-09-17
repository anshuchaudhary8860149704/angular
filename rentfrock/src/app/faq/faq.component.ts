import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  

  constructor(private location: Location) { }

  ngOnInit() {
   
    let coll = document.getElementsByClassName("collapsible");
            let i;
            
            for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let content = this.nextElementSibling;
                if (content.style.display === "block") {
                  content.style.display = "none";
                  
                } else {
                  content.style.display = "block";
                }
              });
            }
  }
  cancel() {
  this.location.back(); 
  
}



}

