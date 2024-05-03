// Función para agregar clase de animación a elementos cuando son visibles en la ventana del navegador
function agregarAnimacion() {
    // Obtener todos los elementos con la clase "animar"
    const elementos = document.querySelectorAll(".animar");
    // Iterar sobre los elementos y agregar la clase de animación cuando sean visibles
    elementos.forEach(elemento => {
      const posicion = elemento.getBoundingClientRect();
      if (posicion.top >= 0 && posicion.bottom <= window.innerHeight) {
        elemento.classList.add("animate__animated", "animate__backInLeft","animate__slow");
        // Eliminar la clase de animación después de un tiempo para permitir que se reproduzca nuevamente
        setTimeout(() => {
          elemento.classList.remove("animate__animated", "animate__backInLeft");
        }, 1000); // Ajusta el tiempo según la duración de tu animación
      }
    });
  }
  // Ejecutar la función cuando se hace scroll en la página
  window.addEventListener("scroll", agregarAnimacion);
  // Ejecutar la función al cargar la página
  window.onload = agregarAnimacion;