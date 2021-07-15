import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../components/list-notes/list-notes.component';

@Injectable({
  providedIn: 'root'
})
export class NoteDataService {

  constructor(private http: HttpClient) { }

  getAllNotes(){
    return this.http.get<Note[]>('http://localhost:3000/notes');
  }

  getNoteById(id:String){
    return this.http.get<Note>(`http://localhost:3000/notes/${id}`);
  }

  updateNote(id:String, note:Note){
    return this.http.put<Note>(`http://localhost:3000/notes/${id}`,note);
  }

  createNote(note:Note){
    return this.http.post<Note>(`http://localhost:3000/notes`,note);
  }

  deleteNote(id:String){
    return this.http.delete(`http://localhost:3000/notes/${id}`);
  }
}
