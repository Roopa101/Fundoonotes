import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-archievenotes',
  templateUrl: './archievenotes.component.html',
  styleUrls: ['./archievenotes.component.scss']
})
export class ArchievenotesComponent implements OnInit {
  // @Output() ArchiveToRefresh= new EventEmitter<any>();

  notesarchive:any

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.GetAllArchiveNotes()

  }

GetAllArchiveNotes(){
  this.noteService.getarchivenotes().subscribe((Response:any)=>{
    //  console.log(Response.data.data);

    this.notesarchive=Response.data.data;
    this.notesarchive.reverse();
    console.log(this.notesarchive);

    })
}
}