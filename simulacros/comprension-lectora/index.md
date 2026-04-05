---
layout: default
title: "Simulacro Comprensión Lectora SIMO 📖 Lectura Crítica [2025]"
description: "Mejora tu comprensión de textos para el examen SIMO ✔️ Textos nivel CNSC y análisis detallado 👉 ¡Asegura tu puntaje!"
permalink: /simulacros/comprension-lectora/
---

<section class="hero hero-lectora">
  <h1>Prueba de Comprensión Lectora</h1>
  <p>Domina la técnica de lectura rápida y análisis de textos complejos para responder con precisión.</p>
</section>

<section id="intro-card" class="intro-active-lectora">
  <h3>📖 Configuración de Lectura Crítica</h3>
  <p>Evalúa tu capacidad de análisis textual, inferencia y comprensión de mensajes explícitos e implícitos.</p>
  <ul>
    <li><strong>Formato:</strong> Textos asociados a preguntas de selección múltiple.</li>
    <li><strong>Banco:</strong> 100 reactivos basados en textos jurídicos, técnicos e informativos.</li>
    <li><strong>Tiempo:</strong> 2 minutos por pregunta (incluye lectura).</li>
  </ul>

  <div style="background: #f8fbff; padding: 1.5rem; border-radius: 8px; border: 1px solid #b3d1ff; margin: 2rem 0;">
    <label for="quiz-length" style="display: block; font-weight: 700; color: #004080; margin-bottom: 10px;">
      ¿Cuántas preguntas de lectura deseas resolver?
    </label>
    <select id="quiz-length" style="width: 100%; padding: 12px; border-radius: 6px; border: 2px solid #b3d1ff; font-size: 1.1rem; outline: none;">
      <option value="12">12 Preguntas (Rápido - 3 textos)</option>
      <option value="24" selected>24 Preguntas (Estándar - 6 textos)</option>
      <option value="40">40 Preguntas (Intensivo - 10 textos)</option>
      <option value="100">100 Preguntas (Maratón de Lectura - 25 textos)</option>
    </select>
  </div>

  <p style="text-align: center;">
    <button id="start-quiz" class="btn-download" style="cursor: pointer; width: 100%; max-width: 400px;">
      🚀 Iniciar Análisis de Textos
    </button>
  </p>
</section>

<section id="quiz-active" class="quiz-active-lectora" style="display: none;">
  <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem; border-bottom: 1px solid #eaf0f8; padding-bottom: 1rem;">
    <div id="timer-display" class="quiz-engine-timer">40:00</div>
    <div id="progress-display" class="quiz-engine-progress">Pregunta 1 de 24</div>
  </div>
  <div id="quiz-content">
    <!-- El contexto y las preguntas se cargan dinámicamente -->
  </div>
</section>

<section id="results-summary" style="display: none; text-align: center;">
  <div style="font-size: 3rem; margin-bottom: 1rem;">📚</div>
  <h2>Simulacro Finalizado</h2>
  <div id="final-score-val" class="quiz-engine-score">0/100</div>
  <p id="score-message" style="font-size: 1.2rem; font-weight: 600;"></p>
  <div style="margin-top: 2rem;">
    <button onclick="window.location.reload()" class="btn-download">🔄 Intentar de nuevo</button>
    <a href="/simulacros/" class="btn" style="margin-left: 1rem;">Volver a Categorías</a>
  </div>
</section>

<section>
  <h2>El Pilar de Funciones Críticas</h2>
  <p>Saber leer no es interpretar. La prueba de mérito evalúa tu habilidad para extraer la idea principal, identificar inferencias y reconocer el tono del autor.</p>
  
  <h3>Estrategias de estudio para el éxito:</h3>
  <ul>
    <li>Identificación de ideas centrales y secundarias.</li>
    <li>Manejo de vocabulario jurídico y administrativo básico.</li>
    <li>Tipos de textos: Argumentativos, normativos e informativos.</li>
    <li>Análisis de enunciados y preguntas de contexto.</li>
  </ul>
</section>

<section>
  <h2>Preguntas Frecuentes (FAQ)</h2>
  
  <h3>¿Qué tipo de textos vienen en la sección de comprensión lectora?</h3>
  <p>Las pruebas del SIMO suelen incluir textos argumentativos, informativos y normativos (leyes, decretos o circulares) para evaluar la interpretación de reglamentos y situaciones de oficina.</p>
  
  <h3>¿Cómo se califica el simulacro de lectura?</h3>
  <p>El simulacro genera un puntaje porcentual basado en el número de respuestas correctas sobre el total seleccionado, permitiéndote identificar áreas de mejora inmediata.</p>
  
  <h3>¿Cuánto tiempo debo dedicar a cada texto?</h3>
  <p>Se recomienda dedicar no más de 5 a 6 minutos por bloque de texto (incluyendo sus 4 preguntas), para mantener un ritmo que asegure completar el examen real.</p>
</section>

<script src="/assets/js/simulacro-lectora.js" defer></script>

<!-- JSON-LD SEO SIMO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://guiasimo.com/simulacros/comprension-lectora/#article",
      "isPartOf": {
        "@id": "https://guiasimo.com/#website"
      },
      "headline": "Simulacro Comprensión Lectora SIMO 📖 Lectura Crítica [2025]",
      "description": "Mejora tu comprensión de textos para el examen SIMO ✔️ Textos nivel CNSC y análisis detallado 👉 ¡Asegura tu puntaje!",
      "image": "https://guiasimo.com/assets/images/logo-guiasimo.png",
      "author": {
        "@type": "Organization",
        "@id": "https://guiasimo.com/#organization"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://guiasimo.com/#organization"
      },
      "datePublished": "2025-01-01T08:00:00-05:00",
      "dateModified": "2025-04-05T08:00:00-05:00",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://guiasimo.com/simulacros/comprension-lectora/"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://guiasimo.com/simulacros/comprension-lectora/#breadcrumb",
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
          "name": "Simulacros",
          "item": "https://guiasimo.com/simulacros/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Comprensión Lectora",
          "item": "https://guiasimo.com/simulacros/comprension-lectora/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://guiasimo.com/simulacros/comprension-lectora/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Qué tipo de textos vienen en la sección de comprensión lectora?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Las pruebas del SIMO suelen incluir textos argumentativos, informativos y normativos (leyes, decretos o circulares) para evaluar la interpretación de reglamentos y situaciones de oficina."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo se califica el simulacro de lectura?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "El simulacro genera un puntaje porcentual basado en el número de respuestas correctas sobre el total seleccionado, permitiéndote identificar áreas de mejora inmediata."
          }
        }
      ]
    }
  ]
}
</script>
