import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StylesummaryService {
private _url ="../assets/dummyapi.json";
  constructor(private http: HttpClient) { }
  getData(){
    return this.http.get(this. _url);
  }
  
} 
