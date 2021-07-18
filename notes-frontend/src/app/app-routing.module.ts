import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNotesComponent } from './components/list-notes/list-notes.component';
import { NoteComponent } from './components/note/note.component';

const routes: Routes = [
  {path:'',redirectTo: 'easy-notes', pathMatch: 'full'},
  {path:'easy-notes',component:ListNotesComponent},
  {path:'note/:id',component:NoteComponent},
  {path:'add-note',component:NoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
