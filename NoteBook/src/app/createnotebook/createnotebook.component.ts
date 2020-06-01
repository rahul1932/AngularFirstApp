import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-createnotebook',
  templateUrl: './createnotebook.component.html',
  styleUrls: ['./createnotebook.component.css']
})
export class CreatenotebookComponent implements OnInit {
  @ViewChild('txtAddNotebook') txtAddNotebook: ElementRef;
  @ViewChild('txtAddNote') txtAddNote: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  notes = [{ notebook: "Physics", notes: ["P1"] }, { notebook: "Chemistry", notes: ["C1", "C2"] }, { notebook: "Maths", notes: ["M1", "M2", "M3"] }];
  filteredNotes = this.notes;
  selectedNotebook = null;

  AddNotebook(notebookName) {
    if (notebookName == "")
      return;

    if (this.notes.find(note => note.notebook == notebookName)) {
      alert("This notebook already exist");
      return;
    }

    this.notes.push({ notebook: notebookName, notes: [] });
    this.txtAddNotebook.nativeElement.value = '';
  }

  AddNote(noteName) {
    if (noteName == "")
      return;

    if (this.notes.find(note => note.notebook == this.selectedNotebook && note.notes.indexOf(noteName) > -1)) {
      alert("This note already exist");
      return;
    }

    this.notes.find(note => note.notebook == this.selectedNotebook).notes.push(noteName);
    this.txtAddNote.nativeElement.value = '';
  }

  FilterNotes(notebook) {
    this.selectedNotebook = notebook;
    this.filteredNotes = this.notes.filter(note => note.notebook == notebook);
  }
}
