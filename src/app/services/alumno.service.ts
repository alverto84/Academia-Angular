import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService extends CommonService<Alumno> {

  protected baseEndPoint = 'http://localhost:8090/api/alumnos';

  constructor(http: HttpClient) { 
    super(http);
  }
}
