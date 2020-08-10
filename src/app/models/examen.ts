import { Pregunta } from "./pregunta";
import { Asignatura } from "./asignatura";
import { Generic } from "./generic";

export class Examen implements Generic {
    id: number;
    nombre: string;
    createdAt: string;
    asignatura: Asignatura[] = [];
    respondido: boolean;
}
