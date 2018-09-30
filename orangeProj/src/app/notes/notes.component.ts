import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './note'
import { NotesService } from './notes.service';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  @Input() title: string = "No Title";
  @Output() notesChanged: EventEmitter<number> = new EventEmitter<number>();

  notes: Note[] = [];
  errorMessage: string;

  constructor(private notesService: NotesService) {
    console.log('s-a apelat constructorul')
   /* this.notesService.getAllNotes().subscribe((result) => {
      for(let note of result){
        this.notes.push(note)
      }
    }) */
   }

  ngOnInit() {
    console.log('S-a apelat on init')
    this.notesService.getAllNotesPromise().then((notes) => {    
      this.notes.push(...notes);
  })
  }

  addNote(note){
    if(note.value.length > 3){
      let noteObj = new Note(note.value)
      this.notes.push(noteObj)
      this.notesService.addNoteHttp(noteObj)
      this.notesChanged.emit(this.notes.length);
      note.value = ""
      this.errorMessage = ""
    } else {
      this.errorMessage = "Note name should have at least 3 characters"
    }
  }
  
  removeNote(index){
    this.notes.splice(index, 1)
    this.notesChanged.emit(this.notes.length);
  }
}
