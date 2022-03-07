import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any

  constructor(private httpService:HttpService) { 
  this.token= localStorage.getItem("token")
  }
  takenotes(data:any)
  {
    let headersObject= {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.token
        }
      )
    }
  console.log("take note called",data)
  return this.httpService.postService('/notes/addNotes',data,true,headersObject)
  }
  getallnotes()
  {
   let headersObject = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': this.token
     })
   }
   console.log("get-all-notes called in service notes");
   return this.httpService.getService('/notes/getNotesList',true,headersObject)
  }

}