import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-trashlist',
  templateUrl: './trashlist.component.html',
  styleUrls: ['./trashlist.component.scss']
})
export class TrashlistComponent implements OnInit {
  notestrash:any


  constructor( private noteService:NoteService) { }

  ngOnInit(): void {
    this.GetAllTrashNotes()

  }
  GetAllTrashNotes(){
    this.noteService.gettrashnotes().subscribe((Response:any)=>{
      //  console.log(Response.data.data);
  
      this.notestrash=Response.data.data;
      this.notestrash.reverse();

      console.log(this.notestrash);
        //  this.notesarchive.reverse()
  
      })
  }

}
