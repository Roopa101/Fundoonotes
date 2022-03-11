import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';
import { ActivatedRoute } from '@angular/router';
import { ArchievenotesComponent } from '../archievenotes/archievenotes.component';
import { TrashlistComponent } from '../trashlist/trashlist.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject: any;
  @Output() trashNoteToRefresh= new EventEmitter<any>();
  @Output() archiveNoteToRefresh= new EventEmitter<any>();

  @Output() changeColorOfNote = new EventEmitter<any>();

  isArchiveNotesComponent=false;
  isTrashNotesComponent=false;

  colors = ['#ccff90', '#a7ffeb', '#cbf0f8', '#aecbfa', '#fff7e6', '#FBBC04', '#f28b82', '#fbbc04', '#fff475', '#fdcfe8', '#e6c9a8', '#0080ff']

  constructor(private noteService: NoteService, private router:ActivatedRoute)  { }


  ngOnInit(): void {
    console.log(this.noteObject)
    let Component = this.router.snapshot.component;
   
    if (Component == ArchievenotesComponent) {
      this.isArchiveNotesComponent = true;
      console.log(this.isArchiveNotesComponent);
    }
    
  
if (Component == TrashlistComponent) {
      this.isTrashNotesComponent = true;
      console.log(this.isTrashNotesComponent);
    }
  }
  delete() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isDeleted: true,
    }
    this.noteService.deleteNote(reqdata).subscribe((response: any) => {
     console.log("note is deleted")
      console.log(response);
      this.trashNoteToRefresh.emit(Response)


    })
  
  }
  
  deleteforevernote() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isDeleted: true,
    }
    this.noteService.permanentDeleteNote(reqdata).subscribe((response: any) => {
     console.log("note is deleted permanently")
      console.log(response);
      this.changeColorOfNote.emit(response)

    })
  
  }

  restorenote() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isDeleted: false,
    }
    this.noteService.deleteNote(reqdata).subscribe((response: any) => {
     console.log("note is restored")
      console.log(response);
      this.changeColorOfNote.emit("Note is Restored");


    })
  
  }

  archieve() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isArchived: true,
    }
    this.noteService.archievenote(reqdata).subscribe((response: any) => {
     console.log("note is archieved")
      console.log(response);
      this.archiveNoteToRefresh.emit(Response)
     

    })
  
  }
  unarchieve() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isArchived: false,
    }
    this.noteService.archievenote(reqdata).subscribe((response: any) => {
     console.log("note is unarchieved")
      console.log(response);
      this.changeColorOfNote.emit("Note is unarchived");


    })
  
  }
  
  changeColor(noteColor:any){
    
    this.noteObject.noteColor= noteColor;
    let reqdata={
      
      noteIdList: [this.noteObject .id],  
      color: noteColor
    }

    this.noteService.usercolor(reqdata).subscribe((response:any) =>{
      console.log(response);

      this.changeColorOfNote.emit(noteColor)
      

    })
    // window.location.reload();
  }

  
  

}