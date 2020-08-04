import { Alumno } from "./alumno";
import { Examen } from "./examen";

export class Curso {
    id: number;
    nombre: string;
    createdAt: string;
    alumnos: Alumno[] = [];
    examenes: Examen[] = [];
}
