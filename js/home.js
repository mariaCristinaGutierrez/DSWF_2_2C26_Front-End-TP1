// portada: el boton "Sorprendeme" abre el perfil de alguien del equipo al azar
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-sorpresa");
  const mensaje = document.getElementById("mensaje-sorpresa");
  const tarjetas = Array.from(document.querySelectorAll(".card--perfil"));
  if (!boton || !mensaje || tarjetas.length === 0) return;

  boton.addEventListener("click", () => {
    const elegida = tarjetas[Math.floor(Math.random() * tarjetas.length)];
    const nombre = elegida.querySelector("h3").textContent;

    boton.disabled = true;
    mensaje.textContent = `Te llevamos al perfil de ${nombre}...`;

    // una pausa corta para que se llegue a leer el mensaje
    setTimeout(() => {
      window.location.href = elegida.href;
    }, 800);
  });

  // si vuelven con el boton atras, el boton tiene que quedar usable
  window.addEventListener("pageshow", () => {
    boton.disabled = false;
    mensaje.textContent = "";
  });
});
