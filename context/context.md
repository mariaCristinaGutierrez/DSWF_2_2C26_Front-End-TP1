# Resumen de Diseño y Tareas

Aquí tienes un resumen ejecutivo con las mejores decisiones de diseño, clasificadas y organizadas en dos categorías principales para separar el diseño visual y la generación del template general, de las aplicaciones concretas para el "perfil-2" (Items de Javier).

---

## 🎨 Parte 1: Items a aplicar en el diseño (Visual y Template General)
Estos puntos conforman la base visual, la estética general y la estructura que tendrá el nuevo archivo `perfil-template.html`.

### 1. Jerarquía de Profundidad (Estética)
* **Fondo y Tarjetas:** Cambiar el fondo general de `#F8FAFC` (Slate 50) a `#F1F5F9` (Slate 100) manteniendo las tarjetas en `#FFFFFF`.
* **Por qué funciona:** Crear una separación tonal del 5% al 8% entre la tarjeta y el fondo le da a la interfaz una apariencia limpia y "tridimensional" (*elevation*), haciendo que el contenido flote de manera natural sin necesidad de recargar la pantalla con sombras pesadas.

### 2. Estructura y Divisores (Estándar de la Industria)
* **Bordes y Divisores:** Incorporar un color dedicado (`#E2E8F0` / Slate 200). Utilizar líneas divisoras delgadas de 1px en este tono para delimitar secciones, inputs de formularios y contenedores.
* **Por qué es la más utilizada:** Plataformas de referencia mundial confían en esto para aportar una estructura gráfica pulida y profesional.

### 3. Colores, Contraste y Accesibilidad (Recomendado UX/UI)
* **Acción y Contraste:** Romper la relación monocromática entre el color Principal (`#2563EB`) y el Secundario (`#1E40AF`), desplazando el secundario hacia un tono neutro oscuro (`#0F172A`) o usándolo estrictamente para el estado *Hover* del botón principal.
* **Por qué es un pilar de UX (Criterio WCAG):** Al usar dos azules de luminosidad similar, el usuario no percibe la jerarquía de las acciones (no sabe cuál es el botón primario y cuál el secundario).

### 4. Tipografía
* **Poppins:** Combinar títulos en Poppins (pesos 600/700) con una altura de línea generosa (`line-height: 1.5` a `1.6`) asegura que la forma geométrica de la tipografía no fatigue la vista durante lecturas prolongadas.

### 5. Resumen Ejecutivo de la Paleta Definitiva
```text
Tipografía:       Poppins (Semibold/Bold para Títulos | Regular para Cuerpo)

🔵 Principal (CTA):        #2563EB  ──► Acción primaria destacada
⚫ Secundario (UI/Texto):  #0F172A  ──► Botones secundarios, títulos y texto primario
🖼️ Fondo de Pantalla:      #F1F5F9  ──► Genera el contraste justo contra las tarjetas
🃏 Tarjetas / Inputs:      #FFFFFF  ──► Superficie limpia de trabajo
🔲 Bordes / Divisores:     #E2E8F0  ──► Delimita componentes con sutileza
💬 Texto Secundario:       #64748B  ──► Descripciones, placeholders y datos accesorios
```

### 6. Estructura de Secciones y Template Base
* **Creación del Template:** Actualmente `perfil-2.html` contiene el template aplicado de toda la web. Pulirlo y usarlo como salida para crear un HTML independiente llamado `perfil-template.html`.
* **Habilidades (Estructura base):** En cada ítem de habilidad incluir el nombre, una imagen, un título y una lista. Los colegas usarán una estructura similar.
* **Películas Favoritas:** Usar un formato de carrusel/reproductor. Dejar 3 ítems con videos/imágenes tipo *placeholder* que ocupen el tamaño del reproductor, ya que cada integrante pondrá sus propios elementos.
* **Discos Favoritos:** Utilizar la misma estructura *placeholder* recién mencionada para las películas.
* **Juegos Favoritos -> "Algo extra de mí":** Renombrar la sección a "Algo extra de mí" y dejar algunas tarjetas (cartas) como *placeholder*.

---

## 👨‍💻 Parte 2: Items de Javier (Específicos para perfil-2.html)
Estas son las personalizaciones, lógicas concretas y elementos específicos que aplicaremos exclusivamente a tu archivo y componentes de perfil.

### 1. Datos Personales y de Identidad
* **Nombre:** El título o nombre en el perfil podría decir "mi nombre" (o tu nombre real, Javier).
* **Temática "Arquetipo / Perfil de Héroe":** Implementar un enfoque chistoso y lúdico para el `perfil-2.html` basado en un "arquetipo" o "perfil de héroe". Las habilidades blandas deben plantearse y dibujarse como si fueran "poderes mágicos" (stats de personaje RPG).
* **Sobre mí:** Para cada enlace, usar un ícono más visual en lugar de solo palabras. Por ejemplo, usar un maletín u otro ícono significativo para el "portfolio".
