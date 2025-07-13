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
  { id: 'europa', nombre: 'Europa y la invención del mundo moderno', semestre: 4, requisitos: ['tiempo'] },
  { id: 'america1', nombre: 'América: Sociedades Ancestrales y Coloniales', semestre: 5, requisitos: ['tiempo'] },
  { id: 'colonia1', nombre: 'Colombia: Sociedades Ancestrales y Coloniales', semestre: 5, requisitos: ['tiempo'] },
  { id: 'europa2', nombre: 'Europa en el mundo contemporáneo', semestre: 6, requisitos: ['europa'] },
  { id: 'colombia2', nombre: 'Sociedades de Colombia moderna y contemporánea', semestre: 7, requisitos: ['tiempo'] },
  { id: 'america2', nombre: 'Sociedades de América moderna y contemporánea', semestre: 7, requisitos: ['tiempo'] },

  { id: 'practica1', nombre: 'Práctica Pedagógica I', semestre: 2 },
  { id: 'practica2', nombre: 'Práctica Pedagógica II', semestre: 3, requisitos: ['practica1'] },
  { id: 'practica3', nombre: 'Práctica Pedagógica III', semestre: 4, requisitos: ['practica2'] },
  { id: 'practica4', nombre: 'Práctica Pedagógica IV', semestre: 5, requisitos: ['practica3'] },
  { id: 'practica5', nombre: 'Práctica Pedagógica V', semestre: 6, requisitos: ['practica4'] },
  { id: 'practica6', nombre: 'Práctica Pedagógica VI', semestre: 7, requisitos: ['practica5'] },
  { id: 'practica7', nombre: 'Práctica Pedagógica VII', semestre: 8, requisitos: ['practica6'] },
  { id: 'practica8', nombre: 'Práctica Pedagógica VIII', semestre: 9, requisitos: ['practica7'] },
  { id: 'practica9', nombre: 'Práctica Pedagógica IX', semestre: 10, requisitos: ['practica8'] }
];

function crearMalla() {
  const contenedor = document.getElementById('malla');
  for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div');
    div.className = 'semestre';
    div.id = `sem${i}`;
    div.innerHTML = `<h2>Semestre ${i}</h2>`;
    contenedor.appendChild(div);
  }

  ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.className = 'ramo';
    div.id = ramo.id;
    div.textContent = ramo.nombre;
    div.dataset.requisitos = ramo.requisitos ? JSON.stringify(ramo.requisitos) : '[]';
    if (ramo.requisitos) div.classList.add('bloqueado');
    div.onclick = () => toggleRamo(div);
    document.getElementById(`sem${ramo.semestre}`).appendChild(div);
  });
}

function toggleRamo(elemento) {
  if (elemento.classList.contains('bloqueado')) return;
  elemento.classList.toggle('aprobado');
  actualizarEstado();
}

function actualizarEstado() {
  ramos.forEach(ramo => {
    const elem = document.getElementById(ramo.id);
    const requisitos = JSON.parse(elem.dataset.requisitos);
    if (!requisitos.length) return;
    const aprobados = requisitos.every(id => document.getElementById(id)?.classList.contains('aprobado'));
    if (aprobados) {
      elem.classList.remove('bloqueado');
    } else {
      elem.classList.add('bloqueado');
      elem.classList.remove('aprobado');
    }
  });
}

crearMalla();
