import { Pregunta } from "./pregunta";
import { Asignatura } from "./asignatura";

export class Examen {
    id: number;
    nombre: string;
    createdAt: string;
    asignatura: Asignatura[] = [];
    respondido: boolean;
}
