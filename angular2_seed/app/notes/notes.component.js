"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const notes_1 = require("./notes");
let NotesComponent = class NotesComponent {
    constructor() {
        this.notes = [];
    }
    ngOnInit() {
        this.notes.push(new notes_1.Notes("To DO1"));
        this.notes.push(new notes_1.Notes("To DO2"));
        this.notes.push(new notes_1.Notes("To DO3"));
        console.log(this.notes);
    }
    addNote() {
        console.log("I'm adding a note");
        if (this.noteName != null && this.noteName.length > 3) {
            this.notes.push(new notes_1.Notes(this.noteName));
            this.noteName = "";
        }
        else {
            alert("Numele trebuie sa aiba minim 3 caractere");
        }
    }
    removeNote(index) {
        this.notes.splice(index, 1);
    }
};
NotesComponent = __decorate([
    core_1.Component({
        selector: 'notes',
        templateUrl: `app/notes/notes.component.html`,
        styleUrls: ['app/notes/notes.component.css']
    }),
    __metadata("design:paramtypes", [])
], NotesComponent);
exports.NotesComponent = NotesComponent;
//# sourceMappingURL=notes.component.js.map