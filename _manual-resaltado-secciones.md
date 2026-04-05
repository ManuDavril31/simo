# Manual de Estándares: Resaltado de Secciones SIMO

Este manual define las clases CSS estandarizadas para aplicar **resaltados suaves** a las secciones de los simulacros y directorios. El objetivo es guiar la atención del usuario hacia bloques de configuración o interacción sin romper la estética global del sitio.

## 🎨 Filosofía del Diseño
1. **Fondo Pastel**: Uso de colores de fondo muy claros (`#f0f7ff`, `#f5f6ff`, `#f0fafa`) para diferenciar el bloque del fondo blanco puro.
2. **Borde de Acento**: Aplicación de bordes gruesos (6px lateral o 4px superior) con el color primario del tema para dar estructura y "fuerza" visual.
3. **Respeto al Estándar**: Estas clases NO deben sobreescribir el `padding`, `margin` o `box-shadow` global de las secciones, solo complementarlos con color y borde.


## 🛠️ Clases Disponibles

### 1. Directorio Principal (`/simulacros/`)
Se usa para destacar el selector de categorías principal.
- **Clase**: `.intro-categories-highlight`
- **Efecto**: Fondo azul cristalino (`#f0f7ff`) y borde superior de 4px azul oscuro.
- **Uso**: `<section class="intro-categories-highlight">`

### 2. Introducción/Configuración de Simulacro
Se utilizan en la sección con el `id="intro-card"` de cada módulo.
- **Básicas**: `.intro-active-basicas` (Azul + Borde izquierdo azul)
- **Lógica**: `.intro-active-logico` (Índigo + Borde izquierdo índigo)
- **Lectura**: `.intro-active-lectora` (Turquesa + Borde izquierdo turquesa)
- **Uso**: `<section id="intro-card" class="intro-active-logico">`

### 3. Contenedor de Juego Activo
Se utiliza en la sección con el `id="quiz-active"` mientras el usuario responde preguntas.
- **Básicas**: `.quiz-active-basicas`
- **Lógica**: `.quiz-active-logico`
- **Lectura**: `.quiz-active-lectora`
- **Efecto**: Fondo muy suave y borde completo de 1px con el color del tema.
- **Uso**: `<section id="quiz-active" class="quiz-active-basicas">`


## 📋 Ejemplo de Implementación

Para aplicar un resaltado a la caja de configuración de Lógica:

```html
<section id="intro-card" class="intro-active-logico">
  <h3>🧩 Configuración de Razonamiento Lógico</h3>
  <!-- Contenido de la sección -->
</section>
```

---
**Nota para el asistente:** Siempre usa estas clases con el modificador `!important` en el CSS si detectas que el tema base de Jekyll intenta restaurar el fondo blanco.
