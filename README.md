# BlueTech · TP1 Front End

Proyecto web en equipo hecho con HTML, CSS y JavaScript para la materia **Desarrollo de Sistemas Web Front End** (comisión 2C26, 2026).

Somos cinco. El sitio tiene una portada, un perfil individual por integrante, navegación entre todas las páginas y una bitácora donde contamos cómo lo fuimos armando.

**Sitio publicado:** _pendiente (Vercel)_

## Integrantes

| Integrante | Perfil | GitHub |
|---|---|---|
| María Cristina Gutiérrez | [perfil-1.html](perfil-1.html) | [mariaCristinaGutierrez](https://github.com/mariaCristinaGutierrez) |
| Javier Nehuén López | [perfil-2.html](perfil-2.html) | [Jableed43](https://github.com/Jableed43) |
| Rocío Ailen Arenas | [perfil-3.html](perfil-3.html) | [rocioailenar](https://github.com/rocioailenar) |
| Facundo Sánchez | [perfil-4.html](perfil-4.html) | _pendiente_ |
| Damián Gorosito | [perfil-5.html](perfil-5.html) | [damiangorosito](https://github.com/damiangorosito) |

## Tecnologías

- HTML5 y CSS3 (Grid, Flexbox, variables CSS, media queries)
- JavaScript sin librerías
- Google Fonts (Poppins)
- Devicon (íconos de tecnologías, por CDN)
- Git y GitHub para el trabajo en equipo, con una rama por integrante

## Estructura

```
├── index.html            portada: presenta al equipo y lista los perfiles
├── bitacora.html         bitácora del proceso
├── perfil-1.html         María Cristina
├── perfil-2.html         Javier
├── perfil-3.html         Rocío (en construcción)
├── perfil-4.html         Facundo (en construcción)
├── perfil-5.html         Damián
├── perfil-template.html  plantilla base de los perfiles
├── css/
│   ├── style.css         variables y estilos base
│   ├── header-footer.css header y footer compartidos por todas las páginas
│   └── perfil.css        estilos de los perfiles (carruseles, etiquetas, tarjetas)
├── js/
│   ├── home.js           función de la portada
│   ├── maria.js          función del perfil de María
│   ├── perfil.js         filtros, carruseles y tarjetas de los perfiles
│   └── damian.js         script del perfil de Damián
├── img/                  avatares de cada integrante (una carpeta por persona) e íconos
└── context/              notas de diseño del proyecto
```

Los perfiles salen de `perfil-template.html`: mismo header, footer y estilos, y cada integrante completa sus datos.

## Guía de estilos

**Tipografía:** Poppins (Google Fonts), pesos 400, 500, 600 y 700.

**Paleta**

Perfiles:

| Uso | Color |
|---|---|
| Principal | `#2563EB` |
| Secundario | `#1E40AF` |
| Fondo | `#F8FAFC` |
| Superficie (tarjetas) | `#FFFFFF` |
| Texto | `#1E293B` |
| Texto secundario | `#64748B` |

Portada, header y footer:

| Uso | Color |
|---|---|
| Azul principal | `#0066CC` |
| Azul oscuro | `#004499` |
| Azul claro | `#E6F0FA` |
| Negro | `#111111` |
| Gris oscuro | `#333333` |
| Gris claro | `#F4F4F6` |
| Borde | `#DDDDDD` |

**Iconografía:** emojis para datos y etiquetas, Devicon para tecnologías y un ícono de GitHub en SVG (`img/icons/github.svg`).

## Funciones de JavaScript

| Dónde | Archivo | Qué hace |
|---|---|---|
| Portada | `js/home.js` | El botón **Sorprendeme** elige un integrante al azar y abre su perfil. |
| Perfil de María | `js/maria.js` | El botón **Saludar** muestra un mensaje de saludo (`saludarMaria()`). |
| Perfil de Javier | `js/perfil.js` | Filtro de habilidades por categoría, carruseles de películas y discos, y tarjetas que se dan vuelta al hacer clic. |
| Perfiles con carrusel (María, Damián) | `js/perfil.js` | Carruseles de películas y discos con flechas y puntos. Al cambiar de slide se frena el video o el disco que estaba sonando. |
| Perfil de Damián | `js/damian.js` | _Pendiente: su función propia._ |

## Cómo verlo en local

Alcanza con abrir `index.html` en el navegador. Si preferís un servidor local:

```bash
python -m http.server 8000
```

y entrar a `http://localhost:8000`.

## Uso de IA

_A completar por el equipo:_ herramientas y modelos usados, en qué partes del código, diseño o contenido ayudaron, si fueron planes gratuitos o pagos, y qué se revisó y cambió con criterio propio.

## Pendientes

- Capturas de pantalla de la portada y de cada perfil.
- Publicar en Vercel y agregar la URL.
- Datos de Rocío y Facundo, y el GitHub de Facundo.
- Función propia del perfil de Damián.
- Breakpoints de 400, 900 y 1200 px en la portada.
- Completar la bitácora con las decisiones del equipo.
