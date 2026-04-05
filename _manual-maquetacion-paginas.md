# Manual de Maquetación y Estructura Global de Páginas 🏗️

Este documento define la estructura estándar que debe tener cualquier página nueva o guía que se agregue al sitio **Guías SIMO Colombia** para asegurar la consistencia visual y funcional.

---

## 1. Estructura del Archivo (Frontmatter)
Todas las páginas deben comenzar con el bloque de metadatos de Jekyll.

```yaml
---
layout: default
title: "Título SEO Optimizado ✅ Palabra Clave [Año]"
description: "Descripción breve y atractiva ✔️ Beneficio claro 👉 Llamado a la acción"
permalink: /nombre-amigable-de-la-pagina/
---
```
> [!IMPORTANT]
> Usa el `layout: default` para que la página herede automáticamente el header, footer, estilos globales y fuentes.

---

## 2. Sección Hero (Encabezado de Página)
Inmediatamente después del frontmatter, cada página debe tener una sección Hero que presente el tema principal.

```html
<section class="hero">
  <h1>Título Principal de la Guía o Herramienta</h1>
  <p>Una breve introducción (1-2 párrafos) que explique de qué trata el contenido y por qué es importante para el usuario.</p>
</section>
```

---

## 3. Organización del Contenido (Secciones)
El contenido debe dividirse en secciones lógicas utilizando la etiqueta `<section>`. Esto aplica márgenes y rellenos estándar definidos en el CSS global.

```html
<section>
  <h2>1. Título de la Sección Principal</h2>
  <p>Contenido del párrafo aquí. Mantén los párrafos cortos para facilitar la lectura.</p>
  
  <h3>1.1. Subtítulo o Paso Específico</h3>
  <p>Explicación detallada o instrucciones.</p>
  
  <ul>
    <li>Punto clave 1</li>
    <li>Punto clave 2</li>
  </ul>
</section>
```

---

## 4. Uso de Imágenes y Multimedia
Para mantener el rendimiento del sitio (Core Web Vitals), sigue estas reglas:

- **Atributos Obligatorios**: `loading="lazy"` y `decoding="async"`.
- **Texto Alt**: Siempre incluye un `alt` descriptivo.
- **Ruta**: Preferiblemente `/assets/images/nombre-de-la-guia/imagen.png`.

```html
<img loading="lazy" decoding="async" src="/assets/images/nombre-imagen.jpg" alt="Descripción clara de lo que muestra la imagen" />
```

---

## 5. Componentes Interactivos (CTAs)
Para guiar al usuario hacia la conversión o soporte, usa el componente de WhatsApp:

```liquid
{% include cta-whatsapp.html 
  title="¿Necesitas ayuda con este proceso?" 
  text="Escríbeme por WhatsApp y te brindo asesoría personalizada paso a paso." 
  btn_text="Escribir por WhatsApp" 
  wa_text="Hola, necesito ayuda con [Tema de la Página]" 
%}
```

---

## 6. Checklist de Finalización
Antes de publicar la nueva página, verifica:

1. [ ] **Permalink**: ¿La URL es corta y contiene la palabra clave?
2. [ ] **SEO**: ¿Has completado el manual de SEO al final del archivo?
3. [ ] **Responsive**: ¿Las imágenes y tablas se ven bien en móvil?
4. [ ] **Anclas**: Si usas un índice, ¿los IDs de los encabezados coinciden?
5. [ ] **Links**: ¿Todos los enlaces externos abren en pestaña nueva (`target="_blank"`)?

---

> [!TIP]
> Para ver un ejemplo real de implementación perfecta, consulta el archivo `registro-simo-colombia.md`.
