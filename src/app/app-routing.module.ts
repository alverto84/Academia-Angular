import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ExpressionStatement } from '@angular/compiler';
import { ExamenesComponent } from './components/examenes/examenes.component';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form.component';

const routes: Routes = [
  {path : '', pathMatch : 'full', redirectTo : 'cursos'},
  {path : 'alumnos', component : AlumnosComponent},
  {path : 'alumnos/form', component : AlumnosFormComponent},
  {path : 'alumnos/form/:id', component : AlumnosFormComponent},
  {path : 'cursos', component : CursosComponent},
  {path : 'examenes', component : ExamenesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
