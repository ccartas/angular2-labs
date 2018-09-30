import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = [
    "Ce am de facut",
    "Cu viata mea",
    "Angular 2",
    "Si nu stiam",
    "Ca ma iubesti si tu",
    "Feedback-ul nu e real",
    "Unde erai",
    "Spune-mi si mie",
    "Ce am de facut",
    "Cu viata mea",
    "Angular 2",
    "Si nu stiam",
    "Ca ma iubesti si tu",
    "Feedback-ul nu e real",
    "Unde erai",
    "Spune-mi si mie",
    "Ce am de facut",
    "Cu viata mea",
    "Angular 2",
    "Si nu stiam",
    "Ca ma iubesti si tu",
    "Feedback-ul nu e real",
    "Unde erai",
    "Spune-mi si mie"
  ]

  taskSearch: FormControl = new FormControl()
  isSearchFocused: boolean = false;
  foundValues = []

  constructor() {
    this.taskSearch.valueChanges.pipe(debounceTime(200), distinctUntilChanged()).subscribe((value) => {
      this.foundValues = this.searchValue(value)
    })
  }

  searchValue(value){
    if(value.length == 0){
      return this.tasks.slice(0, 5);
    }
    return this.tasks.filter(val => val.toLowerCase().includes(value.toLowerCase()))
  }

  toggleDropdown(){
    this.foundValues = this.tasks.slice(0, 5);
    this.isSearchFocused = !this.isSearchFocused;
  }

  ngOnInit() {

  }

}
