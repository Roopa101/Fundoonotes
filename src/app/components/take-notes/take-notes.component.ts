import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  title: any;
  description: any;
  submitted = false;
  isWrite = false;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  add() {
    let reqData = {
      title: this.title,
      description: this.description
    }

    console.log(reqData)
    if (this.title && this.description) {
      this.noteService.takenotes(reqData).subscribe((Response: any) => {
        console.log(Response);
        localStorage.setItem("token", Response.id)
      }, error => { console.log(error); })
    }
    else {
      console.log("Form is not valid. Please Fill the form correctly..");
    }


  }
  method()
{
  return this.isWrite === true ? (this.isWrite = false) : (this.isWrite = true);  // turnary operator is used here
}
}