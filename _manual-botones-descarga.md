### Manual de Implementación: Botón de Descarga Universal

Este instructivo documenta cómo llamar e invocar correctamente los botones de descarga interactivos (con iconos y contenedor centrado) a lo largo del sitio Guías SIMO.

#### 🎯 Componentes CSS (`style.css`)
El botón ha sido configurado bajo dos clases exclusivas:
1. `.btn-download-container`: Envuelve el enlace para alinear todo al centro con suficiente `margin` vertical (separando correctamente el texto de su entorno).
2. `.btn-download`: Le da el aspecto, padding masivo, sombra interactiva (box-shadow) y un gradiente de alta conversión.

#### 📝 Estructura HTML a copiar y pegar

Siempre que desees habilitar un botón de descarga principal para una plantilla (Word, PDF, Excel), abre tu archivo `.md` (Markdown o HTML) y pega este bloque donde lo requieras:

```html
<div class="btn-download-container">
  <a href="/ruta-o-enlace.zip" class="btn-download">
    <span class="icon">⬇️</span> Título de Llamada a la Acción (CTA) aquí
  </a>
</div>
```

**Parámetros:**
- **`href`**: Cambia `/ruta-o-enlace.zip` por la URL de descarga o el sitio donde alojas tu archivo (ej. `https://formatounico.com/...` o `#descargar-formatos` como placeholder).
- **El icono `<span>`**: Ayuda a mantener proporciones responsivas de la imagen del icono de flecha separado del texto.
- **Tamaño Adaptable**: El botón se reestructurará fluidamente tanto en pantallas de escritorio como para clientes usando dispositivos iPhone/Android.

#### 💡 Buenas Prácticas
1. **Evita estilos en línea:** No uses atributos `style="..."` dentro de los botones, solo confía en la clase `.btn-download`.
2. **Contexto:** Inserta el botón de descarga inmediatamente *después* de que le expliques al usuario el valor de descargar el documento (ejemplo, tras un listado de beneficios o ejemplo visual).
3. **Redundancia:** Repetir el componente en la parte más alta y al finalizar el contenido largo previene rebotes o pérdida del CTA.
