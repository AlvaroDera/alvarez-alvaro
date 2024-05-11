(function() {
  // "const" se utiliza para declarar variables
  const votos = [0, 0, 0];
  const candidatos = document.querySelectorAll('.candidato');
  const barrasDeProgreso = document.querySelectorAll('.barraProgreso');
  const contadoresDeVotos = document.querySelectorAll('.contadorVotos');

  // ForEach se utiliza para iterar sobre los candidatos
  candidatos.forEach((candidato, indice) => {
    // addEventListener para para el conteo de los votos
    candidato.querySelector('button').addEventListener('click', (evento) => {
      evento.preventDefault(); // Evita que el formulario se envíe y la página se refresque
      votar(indice);
    });
  });

  // Para el conteo de los votos
  function votar(indiceCandidato) {
    votos[indiceCandidato]++;
    actualizarBarraDeProgreso();
  }

  function actualizarBarraDeProgreso() {
    const totalVotos = votos.reduce((acc, cur) => acc + cur);

    barrasDeProgreso.forEach((barraDeProgreso, indice) => {
      // Para calcuclar el porcentaje en base al total de los votos
      const porcentaje = totalVotos === 0 ? 0 : (votos[indice] / totalVotos) * 100;
      barraDeProgreso.style.width = porcentaje + '%';
      contadoresDeVotos[indice].textContent = 'Votos: ' + votos[indice];
    });
  }
})();
