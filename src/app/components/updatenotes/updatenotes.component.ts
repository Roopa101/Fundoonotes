import { Component, Inject,OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/NoteService/note.service';



@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
  title:any;
  description:any;
  noteId:any;
 


  constructor(private noteService: NoteService,
    public dialogRef: MatDialogRef<UpdatenotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }


  

  ngOnInit(): void {
    // this.updatenotes()

    console.log(this.data)

    this.title=this.data.title,
    this.description=this.data.description,
    this.noteId=this.data.id
  }
  



 close() {
    let reqdata = {
      title: this.title,
      description: this.description,
      noteId:this.noteId

      
    }

    console.log(reqdata)
    if (this.title && this.description) {
      this.noteService.updatenotes(reqdata).subscribe((Response: any) => {
        console.log(Response);
      

        localStorage.setItem("token", Response.id)
      }, error => { console.log(error); })
    }
    else {
      console.log("Form is not valid. Please Fill the form correctly..");
    }
    this.title=''
    this.description=''

    this.dialogRef.close();

  }


}
