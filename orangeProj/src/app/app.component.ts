import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notesTitle = 'Notes Comp';
  numberOfNotes: number = 0;

  constructor(private router: Router){

  }

  onNotesChanged(value) {
    this.numberOfNotes = value;
  }

  goToNotes(){
    this.router.navigate([''])
  }
  goToTasks(){
    this.router.navigate(['tasks'])
  }
}
