import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import{MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetComponent } from './components/reset/reset.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { TakeNotesComponent } from './components/take-notes/take-notes.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { DisplaynotesComponent } from './components/displaynotes/displaynotes.component';
import { IconsComponent } from './components/icons/icons.component';

import {MatExpansionModule} from '@angular/material/expansion';
import { AuthguardServiceService } from './authguard-service.service';
import { UpdatenotesComponent } from './components/updatenotes/updatenotes.component';
import { DeletenotesComponent } from './components/deletenotes/deletenotes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ArchievenotesComponent } from './components/archievenotes/archievenotes.component';
import { TrashlistComponent } from './components/trashlist/trashlist.component';
// import { SearchpipePipe } from './Pipe/searchpipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetComponent,
    ResetComponent,
    DashboardComponent,
    TakeNotesComponent,
    GetAllNotesComponent,
    DisplaynotesComponent,
    IconsComponent,
    UpdatenotesComponent,
    DeletenotesComponent,
    ArchievenotesComponent,
    TrashlistComponent,
    // SearchpipePipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,MatSidenavModule,MatToolbarModule,MatListModule,MatDividerModule,MatMenuModule,MatExpansionModule,MatDialogModule
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
