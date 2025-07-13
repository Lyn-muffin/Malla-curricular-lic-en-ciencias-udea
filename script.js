const ramos = [
  { id: 'ingles1', nombre: 'Inglés 1', semestre: 1 },
  { id: 'ingles2', nombre: 'Inglés 2', semestre: 2, requisitos: ['ingles1'] },
  { id: 'ingles3', nombre: 'Inglés 3', semestre: 3, requisitos: ['ingles2'] },
  { id: 'ingles4', nombre: 'Inglés 4', semestre: 6, requisitos: ['ingles3'] },
  { id: 'ingles5', nombre: 'Inglés 5', semestre: 7, requisitos: ['ingles4'] },

  { id: 'epistemologia', nombre: 'Epistemología de las ciencias sociales', semestre: 1 },
  { id: 'sociologia', nombre: 'Teoría y métodos de la sociología', semestre: 2, requisitos: ['epistemologia'] },
  { id: 'antropologia', nombre: 'Teoría y métodos de la Antropología', semestre: 3, requisitos: ['epistemologia'] },
  { id: 'politica', nombre: 'Teoría y métodos de la Ciencia Política', semestre: 4, requisitos: ['epistemologia'] },

  { id: 'matematicas', nombre: 'Matemáticas y Ciencias sociales', semestre: 1 },
  { id: 'espacial', nombre: 'Taller: Pensamiento espacial', semestre: 2, requisitos: ['matematicas'] },
  { id: 'geografia1', nombre: 'Medios geográficos 1', semestre: 3, requisitos: ['espacial'] },
  { id: 'geografia2', nombre: 'Medios geográficos 2', semestre: 4, requisitos: ['geografia1'] },
  { id: 'paisaje', nombre: 'Paisaje Americano y Europeo', semestre: 6, requisitos: ['geografia2'] },
  { id: 'colombia', nombre: 'Colombia: Territorios y Territorialidades', semestre: 5, requisitos: ['geografia2'] },

  { id: 'historia', nombre: 'Historia, imágenes y concepciones de maestros', semestre: 1 },
  { id: 'tiempo', nombre: 'Taller: Tiempo y sociedad', semestre: 3, requisitos: ['historia'] },
  { id: 'europa', nombre: 'Europa y la invención del mundo moderno', semestre: 4,
