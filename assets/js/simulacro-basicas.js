/**
 * Lógica del Simulacro de Competencias Básicas (CNSC/SIMO)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Banco de Preguntas (Basado en modelos reales CNSC)
    const questions = [
        {
            category: "Competencias Ciudadanas",
            question: "¿Cuál es la norma suprema que prevalece sobre cualquier otra en el ordenamiento jurídico colombiano?",
            options: [
                "El Código Civil",
                "La Constitución Política",
                "Las Leyes del Congreso",
                "Los Decretos Presidenciales"
            ],
            correct: 1,
            explanation: "Según el Artículo 4 de la Constitución Política de 1991: 'La Constitución es norma de normas. En todo caso de incompatibilidad entre la Constitución y la ley u otra norma jurídica, se aplicarán las disposiciones constitucionales'."
        },
        {
            category: "Razonamiento Lógico",
            question: "Si en una oficina hay 20 empleados y el 60% son mujeres, ¿cuántos hombres trabajan en la oficina?",
            options: [
                "8",
                "12",
                "10",
                "6"
            ],
            correct: 0,
            explanation: "Si el 60% son mujeres, el 40% son hombres. El 40% de 20 es (20 * 0.4) = 8."
        },
        {
            category: "Gestión Pública",
            question: "El servidor público que, por razón de su cargo, se apropie en provecho suyo o de un tercero de bienes del Estado, incurre en el delito de:",
            options: [
                "Cohecho",
                "Concusión",
                "Peculado por apropiación",
                "Prevaricato"
            ],
            correct: 2,
            explanation: "El peculado por apropiación ocurre cuando el servidor público se apropia de bienes del Estado o de particulares cuya administración le haya sido confiada por razón de sus funciones."
        },
        {
            category: "Comprensión Lectora",
            question: "Texto: 'La meritocracia en el empleo público busca garantizar que el ingreso a los cargos del Estado se base exclusivamente en las capacidades, méritos y calidades de los aspirantes'. Según el texto, el objetivo principal de la meritocracia es:",
            options: [
                "Aumentar el número de empleados públicos",
                "Asegurar la idoneidad en los cargos estatales",
                "Eliminar las entrevistas de trabajo",
                "Favorecer a quienes llevan más tiempo esperando"
            ],
            correct: 1,
            explanation: "El texto indica que el ingreso se basa en 'capacidades, méritos y calidades', lo cual apunta directamente a la idoneidad del personal."
        },
        {
            category: "Competencias Matemáticas",
            question: "Un tren recorre 240 km en 3 horas. ¿A qué velocidad promedio constante debe viajar para recorrer 400 km en el mismo tiempo?",
            options: [
                "100 km/h",
                "120 km/h",
                "133.3 km/h",
                "150 km/h"
            ],
            correct: 2,
            explanation: "Velocidad = Distancia / Tiempo. Para recorrer 400 km en 3 horas: 400 / 3 = 133.33 km/h."
        },
        {
            category: "Competencias Ciudadanas",
            question: "La acción de tutela es un mecanismo que sirve para:",
            options: [
                "Cobrar deudas pendientes",
                "Proteger derechos fundamentales vulnerados o amenazados",
                "Demandas por despido injustificado",
                "Solicitar la nulidad de un matrimonio"
            ],
            correct: 1,
            explanation: "La Acción de Tutela (Art. 86) tiene como fin la protección inmediata de los derechos constitucionales fundamentales."
        },
        {
            category: "Razonamiento Lógico",
            question: "Complete la serie: 2, 6, 12, 20, 30, ...",
            options: [
                "36",
                "40",
                "42",
                "45"
            ],
            correct: 2,
            explanation: "La diferencia entre los números aumenta de 2 en 2: 6-2=4, 12-6=6, 20-12=8, 30-20=10. El siguiente será 30+12=42."
        },
        {
            category: "Gestión Pública",
            question: "¿Cuál de las siguientes entidades NO pertenece a la Rama Ejecutiva del poder público en Colombia?",
            options: [
                "Ministerio de Hacienda",
                "Gobernación de Antioquia",
                "Procuraduría General de la Nación",
                "Alcaldía de Bogotá"
            ],
            correct: 2,
            explanation: "La Procuraduría General de la Nación pertenece a los Órganos de Control, no a la Rama Ejecutiva."
        },
        {
            category: "Comprensión Lectora",
            question: "En un estado social de derecho, la prevalencia del interés general sobre el particular implica que:",
            options: [
                "Los derechos individuales no existen",
                "El Estado puede quitar bienes sin justificación",
                "Las decisiones políticas deben buscar el bienestar de la mayoría",
                "Las minorías siempre pierden sus derechos"
            ],
            correct: 2,
            explanation: "Significa que en conflictos normativos, el beneficio de la comunidad prima sobre beneficios personales, buscando la equidad social."
        },
        {
            category: "Competencias Matemáticas",
            question: "Si el área de un cuadrado es 64 cm², ¿cuál es su perímetro?",
            options: [
                "16 cm",
                "32 cm",
                "24 cm",
                "64 cm"
            ],
            correct: 1,
            explanation: "Si el área (L*L) es 64, el lado mide 8 cm. El perímetro es 4 * lado: 4 * 8 = 32 cm."
        },
        {
            category: "Competencias Ciudadanas",
            question: "¿Quién es el encargado de velar por el estricto cumplimiento de la ley y promover la justicia en nombre de la sociedad?",
            options: [
                "El Ministerio del Interior",
                "El Ministerio Público",
                "La Corte Suprema de Justicia",
                "El Congreso de la República"
            ],
            correct: 1,
            explanation: "El Ministerio Público (Procuraduría, Defensoría, Personerías) ejerce la guarda y promoción de los derechos humanos y el cumplimiento de la ley."
        },
        {
            category: "Razonamiento Lógico",
            question: "Todos los funcionarios de la entidad son puntuales. Juan es funcionario de la entidad. Por lo tanto:",
            options: [
                "Juan podría ser puntual",
                "Juan es puntual",
                "Los que no son funcionarios no son puntuales",
                "Ninguna de las anteriores"
            ],
            correct: 1,
            explanation: "Es un silogismo categórico válido. Premisa mayor: Todos los A son B. Premisa menor: X es A. Conclusión: X es B."
        },
        {
            category: "Gestión Pública",
            question: "El período de prueba para un empleado que ingresa por carrera administrativa en Colombia es de:",
            options: [
                "3 meses",
                "4 meses",
                "6 meses",
                "1 año"
            ],
            correct: 2,
            explanation: "Según la Ley 909 de 2004, el período de prueba para los empleados de carrera es de 6 meses."
        },
        {
            category: "Comprensión Lectora",
            question: "Considere la frase: 'El silencio administrativo positivo es una excepción a la regla general'. Esto significa que:",
            options: [
                "Siempre que la administración calla, otorga lo pedido",
                "La administración nunca debe guardar silencio",
                "Generalmente el silencio se entiende como una negativa (negativo)",
                "El silencio es la mejor forma de responder"
            ],
            correct: 2,
            explanation: "Si se dice que el positivo es una 'excepción', es porque la regla general es el silencio administrativo negativo."
        },
        {
            category: "Competencias Matemáticas",
            question: "Tres operarios pintan una casa en 12 días. ¿Cuántos días tardarían 6 operarios en realizar el mismo trabajo?",
            options: [
                "24 días",
                "6 días",
                "4 días",
                "8 días"
            ],
            correct: 1,
            explanation: "Es una regla de tres inversa. A más operarios, menos días. (3 * 12) / 6 = 36 / 6 = 6 días."
        },
        {
            category: "Competencias Ciudadanas",
            question: "¿Cuál de estos derechos se puede suspender durante un estado de excepción en Colombia?",
            options: [
                "El derecho a la vida",
                "La prohibición de la tortura",
                "La libertad de circulación y residencia",
                "El debido proceso"
            ],
            correct: 2,
            explanation: "Durante estados de excepción, ciertos derechos como la libertad de movilidad pueden limitarse, pero los derechos humanos intangibles (vida, no tortura) nunca."
        },
        {
            category: "Razonamiento Lógico",
            question: "Si lunes es el tercer día antes del jueves, ¿qué día es mañana si hoy es el segundo día después del viernes?",
            options: [
                "Lunes",
                "Martes",
                "Domingo",
                "Sábado"
            ],
            correct: 0,
            explanation: "Hoy es el segundo día después del viernes -> Domingo. Mañana será Lunes."
        },
        {
            category: "Gestión Pública",
            question: "El principio de 'Eficiencia' en la administración pública se refiere a:",
            options: [
                "Gastar todo el presupuesto asignado",
                "Obtener los máximos resultados con el mínimo de recursos",
                "Contratar a las personas más rápidas",
                "Seguir todos los pasos legales sin importar el tiempo"
            ],
            correct: 1,
            explanation: "La eficiencia busca la optimización de recursos (financieros, humanos, técnicos) para alcanzar los objetivos institucionales."
        },
        {
            category: "Comprensión Lectora",
            question: "Texto: 'La descentralización administrativa busca acercar el Estado al ciudadano, otorgando autonomía a las regiones'. El término 'autonomía' en este contexto se refiere a:",
            options: [
                "Independencia absoluta del Estado central",
                "Capacidad de gestión y decisión propia dentro del marco legal",
                "Derecho a no pagar impuestos nacionales",
                "Posibilidad de crear leyes propias fuera de la constitución"
            ],
            correct: 1,
            explanation: "La autonomía territorial permite a entidades como municipios gestionarse a sí mismas, pero siempre subordinadas a la Constitución y la Ley."
        },
        {
            category: "Competencias Matemáticas",
            question: "¿Cuál es el valor de 'x' en la ecuación 2x + 15 = 45?",
            options: [
                "30",
                "15",
                "20",
                "10"
            ],
            correct: 1,
            explanation: "2x = 45 - 15 -> 2x = 30 -> x = 30 / 2 -> x = 15."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 40 * 60; // 40 minutos en segundos

    const quizContent = document.getElementById('quiz-content');
    const startBtn = document.getElementById('start-quiz');
    const introCard = document.getElementById('intro-card');
    const resultsSummary = document.getElementById('results-summary');
    const timerDisplay = document.getElementById('timer-display');
    const progressDisplay = document.getElementById('progress-display');

    function startTimer() {
        timer = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                finishQuiz();
            }
        }, 1000);
    }

    function renderQuestion(index) {
        const q = questions[index];
        progressDisplay.textContent = `Pregunta ${index + 1} de ${questions.length}`;

        let optionsHTML = '';
        q.options.forEach((opt, i) => {
            optionsHTML += `
                <li class="option-item">
                    <button class="option-btn" data-index="${i}">
                        <span class="option-label">${String.fromCharCode(65 + i)})</span>
                        ${opt}
                    </button>
                </li>
            `;
        });

        quizContent.innerHTML = `
            <div class="question-card animate-fade">
                <span class="badge" style="background: #eef2f7; color: #0059b3; padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; margin-bottom: 10px; display: inline-block;">${q.category}</span>
                <p class="question-text">${q.question}</p>
                <ul class="options-list">
                    ${optionsHTML}
                </ul>
                <div class="explanation-box" id="explanation-${index}">
                    <h4>💡 Explicación:</h4>
                    <p>${q.explanation}</p>
                </div>
            </div>
            <div class="quiz-footer">
                <button id="next-btn" class="btn" style="display: none; width: 100%;">Siguiente Pregunta</button>
            </div>
        `;

        // Attach events to buttons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', handleOptionClick);
        });
    }

    function handleOptionClick(e) {
        const selectedIndex = parseInt(e.currentTarget.getAttribute('data-index'));
        const q = questions[currentQuestionIndex];
        const buttons = document.querySelectorAll('.option-btn');

        // Disable all buttons after selection
        buttons.forEach(btn => btn.disabled = true);

        if (selectedIndex === q.correct) {
            e.currentTarget.classList.add('correct');
            score++;
        } else {
            e.currentTarget.classList.add('incorrect');
            buttons[q.correct].classList.add('correct');
        }

        // Show explanation
        const expBox = document.getElementById(`explanation-${currentQuestionIndex}`);
        expBox.style.display = 'block';

        // Show next button
        const nextBtn = document.getElementById('next-btn');
        nextBtn.style.display = 'block';
        
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.textContent = "Finalizar Simulacro";
        }

        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                renderQuestion(currentQuestionIndex);
            } else {
                finishQuiz();
            }
        });
    }

    function finishQuiz() {
        clearInterval(timer);
        quizContent.style.display = 'none';
        document.querySelector('.quiz-header').style.display = 'none';
        resultsSummary.style.display = 'block';

        const finalScore = Math.round((score / questions.length) * 100);
        document.getElementById('final-score-val').textContent = `${finalScore}/100`;
        
        let message = "";
        if (finalScore >= 80) message = "¡Excelente! Estás muy bien preparado para el nivel de la CNSC.";
        else if (finalScore >= 60) message = "Buen trabajo, pero te recomendamos reforzar las áreas con fallas para asegurar tu vacante.";
        else message = "Debes seguir estudiando. Revisa las explicaciones de las preguntas que fallaste.";

        document.getElementById('score-message').textContent = message;
    }

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            introCard.style.display = 'none';
            document.querySelector('.quiz-container').style.display = 'block';
            startTimer();
            renderQuestion(currentQuestionIndex);
        });
    }

    // Modal/Explanation functionality is built into renderQuestion
});
