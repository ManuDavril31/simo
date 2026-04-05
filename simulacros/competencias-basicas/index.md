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
    <h3>📝 Configuración y Reglas</h3>
    <ul style="margin-bottom: 2rem;">
      <li><strong>Preguntas:</strong> Selección aleatoria (Banco de 100 ítems actualizados).</li>
      <li><strong>Tiempo:</strong> 2 minutos por pregunta (Relación estándar SIMO).</li>
      <li><strong>Categorías:</strong> Lógica, Lectura, Ciudadanas, Gestión, Atención e Informática.</li>
    </ul>

    <div style="background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #ffe0b2; margin-bottom: 2rem;">
      <label for="quiz-length" style="display: block; font-weight: 700; color: #e65100; margin-bottom: 10px;">
        ¿Cuántas preguntas deseas responder hoy?
      </label>
      <select id="quiz-length" style="width: 100%; padding: 12px; border-radius: 6px; border: 2px solid #ffcc80; font-size: 1.1rem; font-family: 'Poppins', sans-serif; cursor: pointer; outline: none;">
        <option value="10">10 Preguntas (Rápido - 20 min)</option>
        <option value="20" selected>20 Preguntas (Estándar - 40 min)</option>
        <option value="40">40 Preguntas (Intensivo - 80 min)</option>
        <option value="50">50 Preguntas (Medio Examen - 100 min)</option>
        <option value="100">100 Preguntas (Maratón - 200 min)</option>
      </select>
    </div>

    <p style="text-align: center;">
      <button id="start-quiz" class="btn-download" style="cursor: pointer; width: 100%; max-width: 400px;">
        🚀 Comenzar Prueba Dinámica
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
