import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesService } from './notes/notes.service';

import { HttpClientModule } from '@angular/common/http'
import { AppRouterModule } from './app.router';
import { TasksComponent } from './tasks/tasks.component';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRouterModule,
    ReactiveFormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
