import { Component, OnInit } from '@angular/core'
import { Notes } from './notes';

@Component({
    selector: 'notes',
    templateUrl: `app/notes/notes.component.html`,
    styleUrls: ['app/notes/notes.component.css']
})
export class NotesComponent implements OnInit {
    notes: Notes[] = []
    noteName: string;

    constructor(){

    }

    ngOnInit(){
        this.notes.push(new Notes("To DO1"))
        this.notes.push(new Notes("To DO2"))
        this.notes.push(new Notes("To DO3"))
        console.log(this.notes)
    }

    addNote(){
        console.log("I'm adding a note")
        if(this.noteName != null && this.noteName.length > 3){
            this.notes.push(new Notes(this.noteName))
            this.noteName = ""
        } else {
            alert("Numele trebuie sa aiba minim 3 caractere")
        }
    }

    removeNote(index){
        this.notes.splice(index, 1);
    }
}