import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteDataService } from 'src/app/services/note-data.service';

export class Note{
 
    public _id : String ='';
    public title : String='';
    public content : String='';
    public updatedAt : Date = new Date();
    constructor(){}
}

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {
  notes :Note[] = [];
  deleteMessage:String = '';
  constructor(private noteData:NoteDataService, private router:Router) { }

  ngOnInit(): void {
    this.getNotes();
  }

  addNote(){
    this.router.navigate(['note','new'])
  }
  getNotes(){
    this.noteData.getAllNotes().subscribe(data=>{
      this.notes = data;
      console.log(this.notes);
    })
  }

  deleteNote(id:String){
    
    this.noteData.deleteNote(id).subscribe(data=>{
      console.log("Deleted" + id);
      this.deleteMessage = 'Note Successfully deleted';
      setTimeout(()=> this.deleteMessage = '',2000); 
      this.getNotes();

    })
    
  }
  update(id:String){
    this.router.navigate(['note',id])
  }
}
