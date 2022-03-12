import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }


  gettoken(){  
    console.log("called");
    return !!localStorage.getItem("token");  
    }  
 }  
