import { Component,Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/NoteService/note.service';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})


export class DisplaynotesComponent implements OnInit {

  @Input() allnotes : any;
  title:any;
  description:any;

   tokenId = localStorage.getItem("Token");


  constructor(private noteService:NoteService, private dialog: MatDialog   ) { }
  dialogOpen(noteService:any) {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      width: '600px',
      data:noteService
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed dialog');
      
    });
  }

  ngOnInit(): void {
  }
  
  message(e:any){  
    console.log(e);
    
  }

}
