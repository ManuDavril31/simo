### Manual de Implementación: Índice de Contenido (TOC) Universal

Este instructivo documenta cómo añadir de manera estructurada una tabla de contenidos ("Índice de Contenido") en los artículos y páginas extensas del sitio Guías SIMO para mejorar la experiencia de usuario y el SEO on-page.

#### 🎯 Componentes CSS (`style.css`)
El índice ha sido configurado bajo tres clases exclusivas para soportar jerarquías:
1. `.toc-container`: Resalta el bloque de resto de directivas (fondo azul claro y borde grueso).
2. `.toc-list`: Limpia las viñetas e incorpora flechas de navegación `(→)` para listas de Sección `H2`.
3. `.toc-sublist`: Nueva clase diseñada jerárquicamente para anidar elementos secundarios `H3`. Tiene un margen sutil de sangría, desactiva la tipografía en negrita (`bold`), achica su fuente (`0.95rem`) y en reemplazo de la flecha, inserta un discreto guion `(—)` con color apaciguado (`#888`).

#### 📝 Estructura HTML a copiar y pegar

En todo artículo largo donde requieras listar las secciones internas, usa este bloque e inserta en el atributo `href` el ID de la sección HTML (`#id-seccion`).

```html
<section class="toc-container">
  <h2>Índice de Contenido</h2>
  <ul class="toc-list">
    <li>
      <a href="#id-primera-seccion">Primera Sección (H2)</a>
      <ul class="toc-sublist">
        <li><a href="#id-subtitulo-1">Subtítulo Descriptivo 1 (H3)</a></li>
        <li><a href="#id-subtitulo-2">Subtítulo Descriptivo 2 (H3)</a></li>
      </ul>
    </li>
    <li><a href="#id-segunda-seccion">Segunda Sección (H2)</a></li>
    <li><a href="#faq">Preguntas Frecuentes (FAQ)</a></li>
  </ul>
</section>
```

#### 📏 Reglas Prácticas de Rendimiento y UX
1. Úsalo inmediatamente después de la introducción general.
2. Comprueba siempre que existan las anclas correspondientes (`id="..."`) tanto en los `<h2>` como en todos los `<h3>`.
3. Anida la etiqueta `<ul>` con la clase `toc-sublist` correctamente DENTRO del `<li>` de su sección padre (H2).
