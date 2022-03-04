import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  tite:any;
  discription:any;
  submitted=false;
  constructor() { }

  ngOnInit(): void {
  }
 add(){
   console.log(this.tite,this.discription)
 }
}
