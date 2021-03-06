import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  
token:any;
notesarray:any;

  constructor( private noteService:NoteService) { }

  ngOnInit(): void {
    this.getallnotes()

  }


  autoRefresh(data:any)
  {
     console.log("refreshed",data);
     this.getallnotes();
  }
  
  getallnotes()
  {
    this.noteService.getallnotes().subscribe((response:any)=>{
    this.notesarray=response.data.data;
    this.notesarray.reverse();

    console.log(this.notesarray);
  
    this.notesarray = this.notesarray.filter((data: any) => {
      console.log(data.isDeleted)
      
      return data.isDeleted === false && data.isArchived === false;
    })
    },error=>{console.log(error)});
  }
  Message(e:any){  
    console.log(e)
    this.getallnotes()
  }
  colourchanged(e:any){
    console.log(e);
    this.getallnotes();
  }
  update(e:any){
    console.log(e);
    this.getallnotes();
  }
  trash(data:any)
  {
     console.log("refreshed",data);
     this.getallnotes();
  }
  archive(data:any)
  {
     console.log("refreshed",data);
     this.getallnotes();
  }

}

