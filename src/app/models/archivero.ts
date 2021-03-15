import { AutorTable } from "./autor";

export interface Archivero {
    Titulo: string;
    idAutor: number;
    Genero: AutorTable;
    Precio: number;
    Modulos: string;
    Roles:string;
}

export interface ArchiveroTable {
    id: number;
    Titulo: string;
    Autores: AutorTable;
    Genero: string;
    Precio: number;
    Modulos: string;
    Roles:string;
}