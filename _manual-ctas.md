# Manual de Uso: Call to Actions (CTAs) Estandarizados de WhatsApp

Para evitar duplicar código HTML (`<div class="cta-whatsapp">...</div>`) repetidamente y tener que cambiar el número o los formatos en decenas de archivos diferentes si haces un rediseño en el futuro, hemos consolidado el CTA en un **módulo estandarizado** de Jekyll llamado `Include`.

A partir de ahora, cada vez que quieras insertar esa caja de WhatsApp en cualquier artículo, sólo debes pegar este código corto en la sección deseada:

```liquid
{% include cta-whatsapp.html 
  title="¿Escribe el título llamativo aquí?" 
  text="Párrafo persuasivo del porqué deberían escribirte." 
  btn_text="Texto dentro del botón verde" 
  wa_text="Hola, necesito ayuda con mis formatos SIMO" 
%}
```

## Parámetros:
- `title`: Lo que va en el encabezado `<h3>` del bloque.
- `text`: El párrafo descriptivo `<p>` que convence al usuario de actuar.
- `btn_text`: El texto puro que va dentro del botón (el emoji 💬 se pone automático, no lo agregues).
- `wa_text`: ¡Muy importante! Es el mensaje "pre-escrito" con el que la persona llegará a tu WhatsApp. *(No necesitas ponerle `%20` a los espacios, el sistema automáticamente lo formatea a URL).*

## Modificaciones de Diseño Global
Dado que ahora todos tus posts consumen la caja desde este único código, si el día de mañana cambias tu número de teléfono de WhatsApp, no tendrás que editar página por página. Entrarás a `_includes/cta-whatsapp.html`, cambiarás el número una vez, y listo, se cambiará en todas tus guías simultáneamente.
