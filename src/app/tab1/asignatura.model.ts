export interface Curso{
    name: string,
    etapas: Etapa[]
}
export interface Asignatura{
    id: string,
    name: string,
    image: string,
    curso: string,
    creditos: number,
    ponderaciones: Ponderaciones[]
}
export interface Ponderaciones{
    name: string,
    peso: number,
    nota: number
}
export interface Etapa{
    name: string,
    asignaturas: Asignatura[]
}