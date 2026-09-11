// filtro de las tarjetas de habilidades (cocina, electronica, musica, etc)
document.addEventListener("DOMContentLoaded", () => {
  const filtros = document.getElementById("filtros-habilidades");
  if (!filtros) return;

  const botones = Array.from(filtros.querySelectorAll("li"));
  const tarjetas = Array.from(document.querySelectorAll(".skill-block[data-categoria]"));

  function aplicarFiltro(filtro) {
    tarjetas.forEach((tarjeta) => {
      const coincide = filtro === "*" || tarjeta.dataset.categoria === filtro;
      tarjeta.classList.toggle("oculto", !coincide);
    });
  }

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      botones.forEach((b) => b.classList.remove("activo"));
      boton.classList.add("activo");
      aplicarFiltro(boton.dataset.filtro);
    });
  });

  // por defecto arranca mostrando el que ya tiene la clase activo en el html
  const activoInicial = botones.find((b) => b.classList.contains("activo")) || botones[0];
  if (activoInicial) {
    activoInicial.classList.add("activo");
    aplicarFiltro(activoInicial.dataset.filtro);
  }
});

// esfera de iconos con la cabeza en el medio
document.addEventListener("DOMContentLoaded", () => {
  const escena = document.querySelector(".sphere-scene");
  const esfera = document.getElementById("skills-arena");
  if (!escena || !esfera) return;

  const items = Array.from(esfera.querySelectorAll(".skill-item"));
  const total = items.length;
  const anguloDorado = Math.PI * (3 - Math.sqrt(5)); // fibonacci sphere, reparte los puntos parejo

  // el radio lo calculo en base al ancho real del contenedor y no con un
  // numero fijo, asi la esfera achica bien en mobile (antes se salia
  // del viewport en pantallas chicas)
  const proporcionRadio = 352 / 840;

  function posicionarEsfera() {
    const radio = escena.clientWidth * proporcionRadio;

    items.forEach((item, i) => {
      const y = 1 - (i / (total - 1)) * 2;
      const radioEnY = Math.sqrt(1 - y * y);
      const theta = anguloDorado * i;

      const x = Math.cos(theta) * radioEnY;
      const z = Math.sin(theta) * radioEnY;

      const posX = x * radio;
      const posY = y * radio;
      const posZ = z * radio;

      const rotY = Math.atan2(x, z) * (180 / Math.PI);
      const rotX = -Math.asin(y) * (180 / Math.PI);

      item.style.transform =
        `translate3d(${posX}px, ${posY}px, ${posZ}px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;

      // los iconos que quedan mas cerca de la camara (z positivo) se
      // dibujan arriba de la cabeza, los del otro lado quedan atras
      item.style.zIndex = Math.round(posZ);
    });
  }

  posicionarEsfera();

  // recalcula todo si cambia el tamaño de la ventana
  let temporizadorResize = null;
  window.addEventListener("resize", () => {
    clearTimeout(temporizadorResize);
    temporizadorResize = setTimeout(posicionarEsfera, 150);
  });
});

// carousel de peliculas y discos (funciona para cualquier cantidad de carousels en la pagina)
document.addEventListener("DOMContentLoaded", () => {
  const carouseles = document.querySelectorAll(".carousel");

  carouseles.forEach((carousel) => {
    const pista = carousel.querySelector(".carousel-pista");
    if (!pista) return;

    const slides = Array.from(pista.querySelectorAll(".carousel-slide"));
    const btnPrev = carousel.querySelector(".carousel-flecha--prev");
    const btnNext = carousel.querySelector(".carousel-flecha--next");
    const contenedorPuntos = carousel.querySelector(".carousel-puntos");
    const etiqueta = carousel.dataset.etiquetaSlide || "elemento";

    let indiceActual = 0;

    // arma los puntitos de navegacion segun la cantidad de slides que haya
    slides.forEach((_, i) => {
      const punto = document.createElement("button");
      punto.type = "button";
      punto.className = "carousel-punto";
      punto.setAttribute("aria-label", `Ir a ${etiqueta} ${i + 1}`);
      punto.addEventListener("click", () => irASlide(i));
      contenedorPuntos.appendChild(punto);
    });

    const puntos = Array.from(contenedorPuntos.querySelectorAll(".carousel-punto"));

    // reasignar el src reinicia el iframe y frena el video/spotify que estuviera sonando
    function detenerReproduccion(slide) {
      const iframe = slide.querySelector("iframe");
      if (iframe) {
        iframe.src = iframe.src;
      }
    }

    function actualizarVista() {
      pista.style.transform = `translateX(-${indiceActual * 100}%)`;
      puntos.forEach((punto, i) => {
        punto.classList.toggle("activo", i === indiceActual);
      });
    }

    function irASlide(indice) {
      if (indice === indiceActual) return;
      detenerReproduccion(slides[indiceActual]);
      indiceActual = (indice + slides.length) % slides.length;
      actualizarVista();
    }

    btnPrev.addEventListener("click", () => irASlide(indiceActual - 1));
    btnNext.addEventListener("click", () => irASlide(indiceActual + 1));

    actualizarVista();
  });
});

// tarjetas de juegos favoritos: click para dar vuelta y ver genero/año
document.addEventListener("DOMContentLoaded", () => {
  const juegos = document.querySelectorAll(".juego-card");

  juegos.forEach((juego) => {
    let temporizador = null;

    function alternarGiro() {
      juego.classList.toggle("girada");

      if (temporizador) {
        clearTimeout(temporizador);
        temporizador = null;
      }

      // si quedo girada, a los 3 segundos vuelve sola
      if (juego.classList.contains("girada")) {
        temporizador = setTimeout(() => {
          juego.classList.remove("girada");
          temporizador = null;
        }, 3000);
      }
    }

    juego.addEventListener("click", alternarGiro);

    // para que tambien funcione con el teclado (enter o espacio)
    juego.addEventListener("keydown", (evento) => {
      if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        alternarGiro();
      }
    });
  });
});
