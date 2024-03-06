document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});
function iniciarApp() {
  navegacionFija();
  crearGaleria();
  scrollNav();
}
//* Navegacion fija
function navegacionFija() {
  const barra = document.querySelector(".header");
  const sobreFestival = document.querySelector(".sobre-festival");
  const body = document.querySelector("body");
  window.addEventListener("scroll", function () {
    if (sobreFestival.getBoundingClientRect().top < 0) {
      barra.classList.add("fijo");
      body.classList.add("body-scroll");
    } else {
      barra.classList.remove("fijo");
      body.classList.remove("body-scroll");
    }
  });
}
//*function smooth scroll
function scrollNav() {
  const enlaces = document.querySelectorAll(".navegacion-principal a");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const scroll = e.target.attributes.href.value;
      const seccion = document.querySelector(scroll);
      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
}
//*recorre toda la galeria de imagenes
function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
        
          <img
            loading="lazy"
            width="200"
            height="300"
            src="./img/small/${i}.jpg"
            alt="Imagen de la galeria" />`;

    imagen.onclick = function () {
      mostrarImagen(i);
    };
    galeria.appendChild(imagen);
  }
}
//* recorre la galeria de imagenes large
function mostrarImagen(index) {
  const imagen = document.createElement("picture");
  imagen.innerHTML = `
        <source srcset="../img/large/${index}.webp" type="image/webp" />
          <img
            loading="lazy"
            width="200"
            height="300"
            src="../img/large/${index}.jpg"
            alt="Imagen de la galeria" />`;

  //* crea overlay de la imagen
  const overlay = document.createElement("DIV");
  overlay.appendChild(imagen);
  overlay.classList.add("overlay");
  overlay.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  };

  //*boton para cerra imagen

  const cerrarImg = document.createElement("P");
  cerrarImg.textContent = "X";
  cerrarImg.classList.add("btn-cerrar");
  cerrarImg.onclick = function () {
    const body = document.querySelector("body");
    body.classList.remove("fijar-body");
    overlay.remove();
  };
  overlay.appendChild(cerrarImg);

  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add("fijar-body");
}
