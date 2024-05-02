// JavaScript para resaltar el elemento seleccionado
var links = document.querySelectorAll('nav a');

links.forEach(function(link) {
  link.addEventListener('click', function() {
    // Eliminar la clase 'active' de todos los enlaces
    links.forEach(function(l) {
      l.classList.remove('active');
    });
    // Agregar la clase 'active' solo al enlace seleccionado
    this.classList.add('active');
  });
});