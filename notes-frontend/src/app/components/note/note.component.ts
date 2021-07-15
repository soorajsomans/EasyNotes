import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteDataService } from 'src/app/services/note-data.service';
import { Note } from '../list-notes/list-notes.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  id:String='';
  note:Note=new Note();
  constructor( private noteData:NoteDataService,
               private route: ActivatedRoute,
               private router:Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.note=new Note();

    if(this.id !="new"){
      this.noteData.getNoteById(this.id).subscribe(data=>{
        this.note = data;
      })
    }
  }

  saveNote(){
    if(this.id ==="new"){
      this.noteData.createNote(this.note).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/']);
        
      })
    }
    else{
      this.noteData.updateNote(this.id,this.note).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/']);
        
      })
    }
  }
  cancel(){
    this.router.navigate(['/'])
  }
}
