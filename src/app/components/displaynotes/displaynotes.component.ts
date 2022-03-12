import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/NoteService/note.service';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { DataService } from 'src/app/services/dataservice/data.service';
@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})


export class DisplaynotesComponent implements OnInit {

  @Input() allnotes : any;
  @Output() changeColorOfNote = new EventEmitter<any>();
  @Output() updateNoteToRefresh = new EventEmitter<any>();
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() archiveNoteToRefresh= new EventEmitter<any>();
  

  public searchWord:any

  title:any;
  description:any;

   tokenId = localStorage.getItem("Token");


  constructor(private noteService:NoteService, private dialog: MatDialog,private dataService:DataService    ) { }
 
  dialogOpen(noteService:any) {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      width: '600px',
      data:noteService
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed dialog');
      this.updateNoteToRefresh.emit('hii')

      
    });
  }

  ngOnInit(): void {
    this.dataService.receivedData.subscribe((response: any)=>{
      console.log("searched",response);
      this.searchWord=response

    }
    )}
  
  message(e:any){  
    console.log(e);
    this.changeColorOfNote.emit("colour")

    
  }
  trash(data:any){  
    console.log(data);  
    this.trashNoteToRefresh.emit("hello")
  }
  archive(data:any){  
    console.log(data);  
    this.archiveNoteToRefresh.emit("hello")
  }
  

}
