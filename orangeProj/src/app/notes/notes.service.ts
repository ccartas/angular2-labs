import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Note } from './note'

@Injectable()
export class NotesService {

    constructor(private httpClient: HttpClient){

    }

    getAllNotes(){
        return this.httpClient.get<Note[]>("http://localhost:8080/notes")
    }

    getAllNotesPromise(){
        return this.httpClient.get("http://localhost:8080/notes")
                    .toPromise().then(res => res as Note[])
    }

    addNoteHttp(note: Note){
        let body = {
            name: note.name
        }
        return this.httpClient.post("http://localhost:8080/add-note",
                        body).toPromise()
    }
}