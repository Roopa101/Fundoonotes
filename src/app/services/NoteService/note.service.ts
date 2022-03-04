import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor() {
    this.token=localStorage.getItem("token")
   }
}
