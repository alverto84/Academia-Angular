import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { CommonListarComponent } from 'src/app/components/common-listar.component';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent 
extends CommonListarComponent<Alumno, AlumnoService> implements OnInit {

  constructor(service: AlumnoService) { 
    super(service);
    this.titulo = 'Listado de alumnos';
    this.nombreModel = Alumno.name;
   }
}
