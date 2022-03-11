import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-archievenotes',
  templateUrl: './archievenotes.component.html',
  styleUrls: ['./archievenotes.component.scss']
})
export class ArchievenotesComponent implements OnInit {
  notesarchive:any

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.GetAllArchiveNotes()

  }

GetAllArchiveNotes(){
  this.noteService.getarchivenotes().subscribe((Response:any)=>{
    //  console.log(Response.data.data);

    this.notesarchive=Response.data.data;
    console.log(this.notesarchive);

    })
}

unarchive(e:any){
  this.GetAllArchiveNotes();
}

}