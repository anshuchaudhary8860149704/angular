import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  confirm(){
    return !!sessionStorage.getItem('user');
  
  }
}
