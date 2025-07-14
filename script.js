const ramos = [
  // Semestre 1
  { id: 'historia_maestros', nombre: 'Historia, imágenes y concepciones de maestros', semestre: 1, creditos: 3 },
  { id: 'didactica', nombre: 'Didáctica, Saberes y Evaluación', semestre: 1, creditos: 3 },
  { id: 'epistemologia', nombre: 'Epistemología de las ciencias sociales', semestre: 1, creditos: 3 },
  { id: 'matematicas', nombre: 'Matemáticas y Ciencias sociales', semestre: 1, creditos: 3 },
  { id: 'ingles1', nombre: 'Inglés 1', semestre: 1, creditos: 2 },
  { id: 'practica1', nombre: 'Práctica Pedagógica I', semestre: 1, creditos: 3 },

  // Semestre 2
  { id: 'paradigmas', nombre: 'Tradiciones y paradigmas en pedagogía', semestre: 2, creditos: 3 },
  { id: 'practica2', nombre: 'Práctica Pedagógica II', semestre: 2, creditos: 3, requisitos: ['practica1'] },
  { id: 'sociologia', nombre: 'Teoría y métodos de la sociología', semestre: 2, creditos: 2, requisitos: ['epistemologia'] },
  { id: 'espacial', nombre: 'Taller: Pensamiento espacial', semestre: 2, creditos: 2, requisitos: ['matematicas'] },
  { id: 'ingles2', nombre: 'Inglés 2', semestre: 2, creditos: 2, requisitos: ['ingles1'] },

  // Semestre 3
  { id: 'cognicion', nombre: 'Cognición cultural y aprendizaje', semestre: 3, creditos: 3 },
  { id: 'evaluacion', nombre: 'Evaluación de los aprendizajes', semestre: 3, creditos: 3 },
  { id: 'practica3', nombre: 'Práctica Pedagógica III', semestre: 3, creditos: 3, requisitos: ['practica2'] },
  { id: 'antropologia', nombre: 'Teoría y métodos de la Antropología', semestre: 3, creditos: 2, requisitos: ['epistemologia'] },
  { id: 'geografia1', nombre: 'Medios geográficos 1', semestre: 3, creditos: 3, requisitos: ['espacial'] },
  { id: 'tiempo', nombre: 'Taller: Tiempo y sociedad', semestre: 3, creditos: 3, requisitos: ['historia_maestros'] },
  { id: 'ingles3', nombre: 'Inglés 3', semestre: 3, creditos: 2, requisitos: ['ingles2'] },

  // Semestre 4
  { id: 'sujetos', nombre: 'Sujetos en las relaciones pedagógicas', semestre: 4, creditos: 3 },
  { id: 'curriculo', nombre: 'Teorías curriculares y contextos educativos', semestre: 4, creditos: 3 },
  { id: 'practica4', nombre: 'Práctica Pedagógica IV', semestre: 4, creditos: 4, requisitos: ['practica3', 'evaluacion'] },
  { id: 'politica', nombre: 'Teoría y métodos de la Ciencia Política', semestre: 4, creditos: 2, requisitos: ['epistemologia'] },
  { id: 'geografia2', nombre: 'Medios geográficos II', semestre: 4, creditos: 3, requisitos: ['geografia1'] },
  { id: 'europa1', nombre: 'Europa y la invención del mundo moderno', semestre: 4, creditos: 3, requisitos: ['tiempo'] },

  // Semestre 5
  { id: 'politicas', nombre: 'Políticas públicas y legislación educativa', semestre: 5, creditos: 3 },
  { id: 'practica5', nombre: 'Práctica Pedagógica V', semestre: 5, creditos: 4, requisitos: ['practica4'] },
  { id: 'colombia1', nombre: 'Colombia: Territorios y Territorialidades', semestre: 5, creditos: 3, requisitos: ['geografia2'] },
  { id: 'america_ancestral', nombre: 'América: Sociedades Ancestrales y Coloniales', semestre: 5, creditos: 3, requisitos: ['tiempo'] },
  { id: 'colombia_ancestral', nombre: 'Colombia: Sociedades Ancestrales y Coloniales', semestre: 5, creditos: 3, requisitos: ['tiempo'] },

  // Semestre 6
  { id: 'popular', nombre: 'Educación Popular', semestre: 6, creditos: 3 },
  { id: 'practica6', nombre: 'Práctica Pedagógica VI', semestre: 6, creditos: 5, requisitos: ['practica5'] },
  { id: 'paisaje', nombre: 'Paisaje Americano y Europeo', semestre: 6, creditos: 3, requisitos: ['geografia2'] },
  { id: 'seminario_poblaciones', nombre: 'Seminario Poblaciones y lugares', semestre: 6, creditos: 2, requisitos: ['antropologia'] },
  { id: 'europa2', nombre: 'Europa en el mundo contemporáneo', semestre: 6, creditos: 3, requisitos: ['europa1'] },
  { id: 'ingles4', nombre: 'Inglés 4', semestre: 6, creditos: 2, requisitos: ['ingles3'] },

  // Semestre 7
  { id: 'inclusion', nombre: 'Educación e inclusión', semestre: 7, creditos: 3 },
  { id: 'practica7', nombre: 'Práctica Pedagógica VII', semestre: 7, creditos: 5, requisitos: ['practica6'] },
  { id: 'colombia_mod', nombre: 'Sociedades de Colombia moderna y contemporánea', semestre: 7, creditos: 3, requisitos: ['tiempo'] },
  { id: 'america_mod', nombre: 'Sociedades de América moderna y contemporánea', semestre: 7, creditos: 3, requisitos: ['tiempo'] },
  { id: 'ingles5', nombre: 'Inglés 5', semestre: 7, creditos: 2, requisitos: ['ingles4'] },

  // Semestre 8
  { id: 'practica8', nombre: 'Práctica Pedagógica VIII', semestre: 8, creditos: 8, requisitos: ['practica7'] },
  { id: 'seminario_geopoliticas', nombre: 'Seminario: Geopolíticas', semestre: 8, creditos: 2 }, // requisito: 100 créditos

  // Semestre 9
  { id: 'formacion_ciudadana', nombre: 'Cátedra de formación ciudadana y constitucional', semestre: 9, creditos: 2 },
  { id: 'practica9', nombre: 'Práctica Pedagógica IX', semestre: 9, creditos: 6, requisitos: ['practica8'] },

  // Semestre 10
  { id: 'practica10', nombre: 'Práctica Pedagógica X: Trabajo de grado', semestre: 10, creditos: 8, requisitos: ['practica9'] },
  { id: 'seminario_inter', nombre: 'Seminario interdisciplinario: Problemáticas sociales', semestre: 10, creditos: 2 } // requisito: 120 créditos
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
    div.innerHTML = `<strong>${ramo.nombre}</strong><br><small>Créditos: ${ramo.creditos}</small>`;
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
