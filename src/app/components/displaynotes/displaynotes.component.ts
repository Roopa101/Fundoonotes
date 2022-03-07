import { Component,Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/NoteService/note.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {

  @Input() allnotes : any;
  //  tokenId = localStorage.getItem("Token");


  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }

}
