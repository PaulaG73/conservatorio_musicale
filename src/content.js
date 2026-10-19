export const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'

export const logoSrc = `${process.env.BASE_URL}Logo.png`

export const noticias = [
  {
    id: 'audicion',
    fecha: '12 de marzo de 2026',
    titulo: 'Audición de fin de semestre',
    texto: LOREM
  },
  {
    id: 'taller',
    fecha: '4 de abril de 2026',
    titulo: 'Taller abierto de iniciación musical',
    texto: LOREM
  },
  {
    id: 'encuentro',
    fecha: '28 de abril de 2026',
    titulo: 'Encuentro con la fundadora',
    texto: LOREM
  }
]

export const eventos = [
  {
    id: 'piano',
    dia: '18',
    mes: 'Abr',
    anio: '2026',
    hora: '19:00',
    titulo: 'Recital de piano',
    lugar: 'Sala principal'
  },
  {
    id: 'percusion',
    dia: '02',
    mes: 'May',
    anio: '2026',
    hora: '18:30',
    titulo: 'Encuentro de percusión',
    lugar: 'Auditorio'
  },
  {
    id: 'canto',
    dia: '21',
    mes: 'May',
    anio: '2026',
    hora: '19:30',
    titulo: 'Muestra de canto',
    lugar: 'Sala principal'
  }
]

export const profesores = [
  { id: 'canto', nombre: 'Nombre', catedra: 'Canto', cv: '#' },
  { id: 'piano', nombre: 'Nombre', catedra: 'Piano', cv: '#' },
  { id: 'percusion', nombre: 'Nombre', catedra: 'Percusión', cv: '#' },
  { id: 'iniciacion', nombre: 'Nombre', catedra: 'Iniciación musical', cv: '#' }
]

export const testimonios = [
  { id: 'piano', cita: LOREM, autor: 'Alumna de piano' },
  { id: 'canto', cita: LOREM, autor: 'Alumno de canto' }
]
