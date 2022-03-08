import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef}from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { AuthguardServiceService } from 'src/app/authguard-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


mobileQuery: MediaQueryList;
  isExpanded=false;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logout() {    
    localStorage.removeItem('token')
    this.router.navigateByUrl('login');
  }
  arch(){
    this.router.navigateByUrl('dashboard/archievenotes')
  

  }
  trash(){
    this.router.navigateByUrl('dashboard/trashlist')
  

  }


}
