const ramos = [
  { id: 'historia_maestros', nombre: 'Historia, imágenes y concepciones de maestros', semestre: 1, creditos: 3 },
  { id: 'didactica', nombre: 'Didáctica, Saberes y Evaluación', semestre: 1, creditos: 3 },
  { id: 'epistemologia', nombre: 'Epistemología de las ciencias sociales', semestre: 1, creditos: 3 },
  { id: 'matematicas', nombre: 'Matemáticas y Ciencias sociales', semestre: 1, creditos: 3 },
  { id: 'ingles1', nombre: 'Inglés 1', semestre: 1, creditos: 2 },
  { id: 'practica1', nombre: 'Práctica Pedagógica I', semestre: 1, creditos: 3 },

  { id: 'practica2', nombre: 'Práctica Pedagógica II', semestre: 2, creditos: 3, requisitos: ['practica1'] },
  { id: 'ingles2', nombre: 'Inglés 2', semestre: 2, creditos: 2, requisitos: ['ingles1'] }
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
