# Manual de Optimización SEO y Datos Estructurados (Schema.org)

Este documento contiene las directrices técnicas y de redacción que deben seguirse **cada vez que se agregue una nueva guía o post** en el sitio de Guías SIMO Colombia. Seguir estos pasos asegura que Google muestre resultados enriquecidos (Rich Results), un alto CTR en la página de resultados (SERP) y posiciones competitivas.

---

## 1. Configuración del Frontmatter (Metadatos)
Las meta etiquetas principales deben generar un fuerte deseo de clic mediante el uso estratégico de beneficios y símbolos (emojis aprobados por SEO).

### Plantilla de Frontmatter:
```yaml
---
layout: default
title: "Tu Palabra Clave Principal ✅ Promesa Relevante [Año]"
description: "Breve beneficio de leer el artículo ✔️ Algo que incite a que sigan leyendo el tutorial 👉 Llamado a la acción rápido"
permalink: /tu-nueva-url/
---
```
> **Nota:** El `title` no debe exceder los 60 caracteres y la `description` debe quedarse en un máximo de 155 caracteres.

---

## 2. Redacción y Estructuración (Markdown e HTML)
El cuerpo del documento debe redactarse cuidando la semántica.

1. **Uso de Jerarquías:** Sólo un `<h1>` en toda la página (ya manejado por el layout hero general). Usa libremente `<h2>` para apartados principales y `<h3>` para pasos.
2. **Listas y viñetas:** Usa listados siempre que enumeres requerimientos. Ayuda a lograr *Featured Snippets*.
3. **Bloque de Preguntas Frecuentes (FAQ):** Es **obligatorio** buscar entre 2 y 4 dudas reales de los usuarios (foros, sugerencias de Google) para responderlas antes de cerrar tu contenido.

### Plantilla de la sección FAQ:
```html
<section>
  <h2>Preguntas Frecuentes (FAQ)</h2>
  
  <h3>¿Pregunta altamente buscada 1?</h3>
  <p>Respuesta yendo directo al grano, en no más de 1 o 2 párrafos concisos y precisos.</p>
  
  <h3>¿Pregunta altamente buscada 2?</h3>
  <p>Respuesta clara y precisa.</p>
</section>
```

---

## 3. Inyección del Grafo JSON-LD
La parte técnica más importante. **Al final de tu archivo `.md`**, debes insertar el código de Schema que interconecta el artículo, los atajos de Breadcrumbs, la estructura tutorial (HowTo) y el mapeo de tus FAQs. Al hacerlo, las etiquetas de *WebSite* y *Organization* se acoplarán inteligentemente desde el `_layouts/default.html`.

### Plantilla JSON-LD:
Copia lo siguiente al final y **reemplaza las partes indicadas** con lo que aplique al artículo:

```html
<!-- JSON-LD SEO SIMO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://guiasimo.com/tu-nueva-url/#article",
      "isPartOf": {
        "@id": "https://guiasimo.com/#website"
      },
      "headline": "AQUÍ_MISMO_TÍTULO_DEL_FRONTMATTER",
      "description": "AQUÍ_MISMA_DESCRIPCIÓN_DEL_FRONTMATTER",
      "image": "https://guiasimo.com/assets/images/IMAGEN_PRINCIPAL.jpg",
      "author": {
        "@type": "Organization",
        "@id": "https://guiasimo.com/#organization"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://guiasimo.com/#organization"
      },
      "datePublished": "YYYY-MM-DDT08:00:00-05:00",
      "dateModified": "YYYY-MM-DDT08:00:00-05:00",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://guiasimo.com/tu-nueva-url/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://guiasimo.com/tu-nueva-url/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://guiasimo.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Nombre Corto en Menú de Miga",
          "item": "https://guiasimo.com/tu-nueva-url/"
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://guiasimo.com/tu-nueva-url/#howto",
      "name": "TÍTULO DEL TUTORIAL (Qué se aprenderá) paso a paso",
      "description": "Una frase resumiendo el tutorial completo.",
      "image": "https://guiasimo.com/assets/images/IMAGEN_TUTORIAL.png",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Nombre del paso 1",
          "text": "Resumen directo en texto literal de lo que hay que hacer en el paso 1.",
          "url": "https://guiasimo.com/tu-nueva-url/#ID_O_ANCLA_DE_SECCION_1"
        },
        {
          "@type": "HowToStep",
          "name": "Nombre del paso 2",
          "text": "Resumen directo del paso 2.",
          "url": "https://guiasimo.com/tu-nueva-url/#ID_O_ANCLA_DE_SECCION_2"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://guiasimo.com/tu-nueva-url/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Pregunta 1 redactada exacta como en el HTML?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Respuesta en texto puro sin etiquetas HTML (solo texto literal a como está arriba)."
          }
        }
      ]
    }
  ]
}
</script>
```
