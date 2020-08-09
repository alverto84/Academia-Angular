import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  titulo = 'Listado de alumnos';
  alumnos: Alumno[];

  totalRegistros = 0;
  paginaActual = 0;
  totalPorPagina = 4;
  pageSizeOptions: number[] = [3, 5, 10, 25, 100];


  constructor(private service: AlumnoService) { }

  ngOnInit(): void {
    const paginaActual = this.paginaActual.toString();
    const totalPorPagina = this.totalPorPagina.toString();
    this.service.listarPaginas(paginaActual, totalPorPagina).
    subscribe(p => 
    {
        this.alumnos = p.content as Alumno[];
        this.totalRegistros = p.totalElements as number;
    });
  }

  public eliminar(alumno: Alumno): void {

    Swal.fire({
      title: `Cuidado:`,
      text: `¿Seguro que desea eliminar al alumno ${alumno.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.service.eliminar(alumno.id).subscribe(() => {
          this.alumnos = this.alumnos.filter(a => a !== alumno);
        })
        Swal.fire(`Eliminado: `,`Alumno ${alumno.nombre} eliminado con éxito`, 'success');
      }
    });
  }
}
