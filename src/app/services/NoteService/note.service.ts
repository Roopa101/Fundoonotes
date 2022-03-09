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

  updatenotes(reqdata:any)
  {
   let headersObject = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': this.token
     })
   }
   console.log("updatenotes called in service notes");
   return this.httpService.postService('/notes/updateNotes',reqdata,true,headersObject)
  }

  deleteNote(data: any){
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    console.log("delete called in service notes")
    return this.httpService.postService('/notes/trashNotes',data,true,headersObject)
  }

  archievenote(data: any){
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    console.log("archive called in service notes")
    return this.httpService.postService('/notes/archiveNotes',data,true,headersObject)
  }
  
  getarchivenotes() {
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    console.log("archiveNoteslist called")
    return this.httpService.getService('/notes/getArchiveNotesList',true,headersObject)
  }

  gettrashnotes(){
    let headersObject={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    console.log("trashNoteslist called")
    return this.httpService.getService('/notes/getTrashNotesList',true,headersObject)

  }

  usercolor(data:any){   
     
    let header= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService('/notes/changesColorNotes',data,true,header)
   }


}