import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteObject: any;
  
  @Output() changeColorOfNote = new EventEmitter<any>();
 
  colors = [
    {
      name: 'Red', bgColorValue: '#f28b82'
    },  
    
    {
      name: 'Yellow', bgColorValue: '#FFFEA9'
    },
    {
      name: 'Light Green', bgColorValue: '#E4E978'
    },
    {
      name: 'Lime', bgColorValue: '#B3E283'
    },
    {
      name: 'Teal', bgColorValue: '#CDF0EA'
    },
    {
      name: 'white', bgColorValue: '#ffffff'
    }
  ];

  constructor(private noteService: NoteService)  { }


  ngOnInit(): void {
    console.log(this.noteObject)
  }
  delete() {
    let reqdata = {
      noteIdList: [this.noteObject.id],
      isDeleted: true,
    }
    this.noteService.deleteNote(reqdata).subscribe((response: any) => {
     console.log("note is deleted")
      console.log(response);
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
    window.location.reload();
  }
  

}