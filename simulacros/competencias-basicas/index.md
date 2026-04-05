---
layout: default
title: "Simulacro Competencias Básicas CNSC [Año] ✍️ Prueba Real"
description: "Realiza nuestro simulacro completo de competencias básicas para convocatorias CNSC. 20 preguntas con explicaciones, tiempo límite y evaluación de resultados."
permalink: /simulacros/competencias-basicas/
---

<section class="hero">
  <h1>Simulacro: Competencias Básicas</h1>
  <p>Evalúa tus conocimientos en razonamiento, lectura crítica, matemáticas y ciudadanía bajo el estándar de evaluación del SIMO.</p>
</section>

<div id="intro-card" class="container" style="max-width: 800px; margin: 0 auto;">
  <section class="instructions-card">
    <h3>📝 Instrucciones de la Prueba</h3>
    <ul>
      <li><strong>Total de preguntas:</strong> 20 de selección múltiple.</li>
      <li><strong>Tiempo sugerido:</strong> 40 minutos (2 min por pregunta).</li>
      <li><strong>Áreas evaluadas:</strong> Lógica, Lectura, Matemáticas y Ciudadanas.</li>
      <li><strong>Dinámica:</strong> Al responder cada pregunta, verás inmediatamente la clave correcta y una explicación detallada.</li>
    </ul>
    <p style="text-align: center; margin-top: 2rem;">
      <button id="start-quiz" class="btn-download" style="cursor: pointer;">
        🚀 Comenzar Simulacro Ahora
      </button>
    </p>
  </section>
</div>

<div class="quiz-container" style="display: none;">
  <div class="quiz-header">
    <div class="quiz-timer">
      ⏱️ Tiempo restante: <span id="timer-display">40:00</span>
    </div>
    <div id="progress-display" class="quiz-progress">
      Pregunta 1 de 20
    </div>
  </div>

  <div id="quiz-content">
    <!-- El contenido se genera dinámicamente con JS -->
  </div>
</div>

<div id="results-summary" class="results-summary container" style="max-width: 800px; margin: 4rem auto; display: none;">
  <div class="score-circle">
    <span id="final-score-val" class="score-val">0/100</span>
    <span class="score-label">Puntaje Final</span>
  </div>
  <h2>Simulacro Finalizado</h2>
  <p id="score-message">Calculando tus resultados...</p>
  
  <div style="margin-top: 2rem;">
    <a href="/simulacros/" class="btn">Volver a Categorías</a>
    <button onclick="window.location.reload()" class="btn" style="background: #004080; color: white;">Repetir Simulacro</button>
  </div>
</div>

<section style="margin-top: 4rem;">
  <h2>Consejos para el día de la prueba</h2>
  <p>Para obtener un puntaje superior en las pruebas de la CNSC, recuerda:</p>
  <ol>
    <li><strong>Lee el enunciado completo:</strong> A veces la respuesta está en el contexto del problema.</li>
    <li><strong>Descarta opciones absurdas:</strong> En SIMO, suele haber 2 distractores lejanos y 1 distractor muy cercano a la correcta.</li>
    <li><strong>No te detengas demasiado:</strong> Si una pregunta de lógica te toma más de 3 minutos, pasa a la siguiente y vuelve al final.</li>
  </ol>
</section>

<!-- Scripts específicos del simulacro -->
<script src="/assets/js/simulacro-basicas.js" defer></script>
