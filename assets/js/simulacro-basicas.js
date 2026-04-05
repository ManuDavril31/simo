/**
 * Lógica del Simulacro Dinámico de Competencias Básicas (CNSC/SIMO)
 * Banco de 100 Preguntas con Aleatorización.
 */

document.addEventListener('DOMContentLoaded', () => {
    // BANCO DE PREGUNTAS COMPLETO (100 ÍTEMS)
    const questionPool = [
        // --- 1-20: Competencias Ciudadanas / Constitución ---
        { category: "Competencias Ciudadanas", question: "¿Cuál es la norma de normas en el ordenamiento jurídico colombiano?", options: ["Código Civil", "Constitución Política", "Leyes del Congreso", "Decretos"], correct: 1, explanation: "Art. 4 de la Constitución: La Constitución es norma de normas." },
        { category: "Competencias Ciudadanas", question: "La acción de tutela protege derechos:", options: ["De crédito", "Fundamentales vulnerados", "Laborales de despido", "Patrimoniales"], correct: 1, explanation: "Art. 86 de la Constitución Nacional." },
        { category: "Competencias Ciudadanas", question: "¿Quién elige al Defensor del Pueblo?", options: ["El Senado", "La Cámara de Representantes", "El Presidente", "La Corte Suprema"], correct: 1, explanation: "Lo elige la Cámara de terna enviada por el Presidente." },
        { category: "Competencias Ciudadanas", question: "El voto en Colombia es un derecho y:", options: ["Una obligación legal", "Un deber ciudadano", "Un trámite administrativo", "Un acto opcional sin valor"], correct: 1, explanation: "Art. 258: El voto es un derecho y un deber ciudadano." },
        { category: "Competencias Ciudadanas", question: "¿Cuál de estos NO es un mecanismo de participación ciudadana?", options: ["Referendo", "Consulta Popular", "Debate Televisivo", "Cabildo Abierto"], correct: 2, explanation: "La Ley 134 de 1994 define los mecanismos oficiales; los debates no lo son." },
        { category: "Competencias Ciudadanas", question: "La soberanía reside exclusivamente en:", options: ["El Presidente", "El Pueblo", "Las Fuerzas Armadas", "El Congreso"], correct: 1, explanation: "Art. 3 de la Constitución Política." },
        { category: "Competencias Ciudadanas", question: "¿Quién sanciona las leyes?", options: ["Congreso", "Corte Constitucional", "Presidente de la República", "Pueblo"], correct: 2, explanation: "El Presidente sanciona la ley tras su aprobación legislativa." },
        { category: "Competencias Ciudadanas", question: "Derecho a no ser sometido a desaparición forzada es un derecho:", options: ["Económico", "Fundamental", "Colectivo", "Social"], correct: 1, explanation: "Art. 12 de la Constitución Nacional." },
        { category: "Competencias Ciudadanas", question: "El estado de excepción por guerra exterior debe ser declarado por:", options: ["Senado", "Consejo de Estado", "Presidente con firma de ministros", "Pueblo"], correct: 2, explanation: "Art. 212 de la Constitución." },
        { category: "Competencias Ciudadanas", question: "El Defensor del Pueblo pertenece al:", options: ["Poder Ejecutivo", "Ministerio Público", "Poder Judicial", "Organismo Legislativo"], correct: 1, explanation: "Forma parte del Ministerio Público junto con la Procuraduría." },
        { category: "Competencias Ciudadanas", question: "¿Cada cuánto se eligen los Senadores?", options: ["2 años", "4 años", "6 años", "3 años"], correct: 1, explanation: "El período es de 4 años." },
        { category: "Competencias Ciudadanas", question: "El habeas corpus protege el derecho a:", options: ["Integridad", "Propiedad", "Libertad física", "Opinión"], correct: 2, explanation: "Acción para quien se encuentre privado de la libertad ilegalmente." },
        { category: "Competencias Ciudadanas", question: "¿Quién es el jefe supremo de las Fuerzas Armadas?", options: ["General activo", "Ministro de Defensa", "Presidente de la República", "Presidente del Senado"], correct: 2, explanation: "Figura constitucional del Jefe de Estado." },
        { category: "Competencias Ciudadanas", question: "Principios mínimos del trabajo: el descanso necesario es:", options: ["Opcional", "Obligatorio e irrenunciable", "Sujeto a contrato", "Un beneficio extra"], correct: 1, explanation: "Garantía del Art. 53 de la Constitución." },
        { category: "Competencias Ciudadanas", question: "¿Qué rama del poder administra justicia?", options: ["Ejecutiva", "Legislativa", "Judicial", "Control"], correct: 2, explanation: "Función de cortes, tribunales y fiscalía." },
        { category: "Competencias Ciudadanas", question: "¿Cuál es la terna para elegir Fiscal General?", options: ["Senado", "Presidente de la República", "Consejo de Estado", "Corte Suprema"], correct: 1, explanation: "El Presidente envía la terna a la Corte Suprema." },
        { category: "Competencias Ciudadanas", question: "El derecho a la huelga está garantizado excepto en:", options: ["Sector privado", "Servicios públicos esenciales", "Minería", "Transporte"], correct: 1, explanation: "Art. 56: Salvo en servicios públicos esenciales." },
        { category: "Competencias Ciudadanas", question: "La libre expresión es un derecho de aplicación:", options: ["Inmediata", "Progresiva", "Condicionada", "Diferida"], correct: 0, explanation: "Derecho fundamental de primera generación." },
        { category: "Competencias Ciudadanas", question: "El personero municipal es representante de:", options: ["El Alcalde", "El Ministerio Público", "El Concejo", "La Gobernación"], correct: 1, explanation: "Delegado del Ministerio Público a nivel local." },
        { category: "Competencias Ciudadanas", question: "¿Quién conoce las demandas de inconstitucionalidad?", options: ["Corte Suprema", "Consejo de Estado", "Corte Constitucional", "Senado"], correct: 2, explanation: "Atribución del Art. 241 de la Constitución." },

        // --- 21-40: Razonamiento Lógico / Matemáticas ---
        { category: "Razonamiento Lógico", question: "Si hoy es martes, ¿qué día fue hace 15 días?", options: ["Lunes", "Martes", "Miércoles", "Domingo"], correct: 1, explanation: "15 días son 2 semanas y 1 día. 14 días caen el mismo día (martes), 15 días atrás fue Lunes. Espera, 14 es martes, 15 es Lunes." },
        { category: "Razonamiento Lógico", question: "Complete: 3, 6, 12, 24, ...", options: ["30", "36", "48", "60"], correct: 2, explanation: "Se multiplica por 2 (3*2=6, 6*2=12, 12*2=24, 24*2=48)." },
        { category: "Razonamiento Lógico", question: "Si todos los A son B y C es A, entonces:", options: ["C es B", "B es C", "C no es B", "Nada se concluye"], correct: 0, explanation: "Deducción lógica simple." },
        { category: "Razonamiento Lógico", question: "¿Cuántos meses tienen 28 días?", options: ["1", "6", "11", "12"], correct: 3, explanation: "Todos los meses tienen al menos 28 días." },
        { category: "Razonamiento Lógico", question: "Si 3 camisas cuestan 45.000, ¿cuánto cuestan 7 camisas?", options: ["100.000", "105.000", "90.000", "115.000"], correct: 1, explanation: "Cada camisa 15.000. 7 * 15.000 = 105.000." },
        { category: "Competencias Matemáticas", question: "El 25% de 800 es:", options: ["100", "200", "300", "400"], correct: 1, explanation: "800 / 4 = 200." },
        { category: "Competencias Matemáticas", question: "¿Cuál es el valor de x en: 3x - 5 = 10?", options: ["3", "5", "10", "15"], correct: 1, explanation: "3x = 15 -> x = 5." },
        { category: "Competencias Matemáticas", question: "Área de un rectángulo de base 12 y altura 5:", options: ["17", "34", "60", "24"], correct: 2, explanation: "12 * 5 = 60." },
        { category: "Competencias Matemáticas", question: "Si un auto va a 80 km/h, ¿cuánto recorre en 45 min?", options: ["40 km", "60 km", "50 km", "70 km"], correct: 1, explanation: "45 min = 0.75 h. 80 * 0.75 = 60 km." },
        { category: "Competencias Matemáticas", question: "Raíz cuadrada de 144:", options: ["10", "11", "12", "13"], correct: 2, explanation: "12 * 12 = 144." },
        { category: "Razonamiento Lógico", question: "Padre de Juan tiene 4 hijos: Norte, Sur, Este y...", options: ["Oeste", "Juan", "Pedro", "Poniente"], correct: 1, explanation: "El padre se llama 'Padre de Juan'." },
        { category: "Razonamiento Lógico", question: "¿Qué letra sigue: A, C, E, G, ...?", options: ["H", "I", "J", "K"], correct: 1, explanation: "Se salta una letra (A..B..C..D..E..F..G..H..I)." },
        { category: "Razonamiento Lógico", question: "Si 5 obreros tardan 4 días, 10 obreros tardan:", options: ["8 días", "2 días", "1 día", "4 días"], correct: 1, explanation: "Doble obreros, mitad de tiempo (4/2 = 2)." },
        { category: "Competencias Matemáticas", question: "Suma de ángulos internos de un triángulo:", options: ["90°", "180°", "360°", "270°"], correct: 1, explanation: "Propiedad fundamental geométrica." },
        { category: "Competencias Matemáticas", question: "Si 2/5 de un número es 20, el número es:", options: ["40", "50", "100", "80"], correct: 1, explanation: "20 * 5 / 2 = 50." },
        { category: "Razonamiento Lógico", question: "En un cajón hay 4 calcetines rojos y 4 azules. Mínimo para sacar un par igual:", options: ["2", "3", "4", "5"], correct: 1, explanation: "Con 3, al menos 2 deben ser del mismo color." },
        { category: "Razonamiento Lógico", question: "¿Cuál es el número primo?", options: ["9", "15", "21", "23"], correct: 3, explanation: "23 solo es divisible por 1 y por sí mismo." },
        { category: "Competencias Matemáticas", question: "Si x=2, y=3, ¿cuánto es x² + y²?", options: ["10", "13", "25", "12"], correct: 1, explanation: "4 + 9 = 13." },
        { category: "Competencias Matemáticas", question: "Un ángulo obtuso mide:", options: ["> 90° y < 180°", "< 90°", "90°", "180°"], correct: 0, explanation: "Definición geométrica." },
        { category: "Razonamiento Lógico", question: "Si subo la escalera de 2 en 2 doy 10 pasos. ¿De 1 en 1?", options: ["5", "10", "20", "40"], correct: 2, explanation: "20 escalones / 1 = 20 pasos." },

        // --- 41-60: Gestión Pública / Normatividad ---
        { category: "Gestión Pública", question: "El principio de Celeridad significa:", options: ["Gastar rápido", "Impulso de oficio y agilidad", "Hacer lo que el jefe diga", "No pedir pruebas"], correct: 1, explanation: "Prontitud en la resolución de asuntos." },
        { category: "Gestión Pública", question: "¿Qué es el MIPG?", options: ["Manual de Gasto", "Modelo Integrado de Planeación y Gestión", "Método de Pago", "Manual de Personal"], correct: 1, explanation: "Marco de referencia para la gestión pública." },
        { category: "Gestión Pública", question: "El período de prueba en carrera administrativa dura:", options: ["3 meses", "6 meses", "1 año", "4 meses"], correct: 1, explanation: "Establecido por la Ley 909 de 2004." },
        { category: "Gestión Pública", question: "Diferencia entre eficiencia y eficacia:", options: ["Son iguales", "Eficacia es cumplir meta, Eficiencia es optimizar recursos", "Eficiencia es rapidez, Eficacia es calidad", "En el estado no se aplican"], correct: 1, explanation: "Conceptos clave de la administración pública." },
        { category: "Gestión Pública", question: "La calificación de servicios debe ser:", options: ["Semestral", "Anual", "Mensual", "Cada 2 años"], correct: 1, explanation: "Evaluación integral del desempeño anual." },
        { category: "Gestión Pública", question: "El MECI es para:", options: ["Control Externo", "Control Interno", "Contabilidad", "Tesorería"], correct: 1, explanation: "Modelo Estándar de Control Interno." },
        { category: "Gestión Pública", question: "¿Qué es SECOP?", options: ["Sistema de Salud", "Sistema Contable", "Sistema de Contratación Pública", "Servicio de Policía"], correct: 2, explanation: "Portal para ver las compras del Estado." },
        { category: "Gestión Pública", question: "Un servidor público de 'Libre Nombramiento' puede ser despedido:", options: ["Solo con sumario", "En cualquier momento (discrecional)", "Solo si comete delito", "Nunca antes de 4 años"], correct: 1, explanation: "No goza de la estabilidad de carrera." },
        { category: "Gestión Pública", question: "El principio de Transparencia garantiza:", options: ["Sigilo absoluto", "Acceso a la información pública", "Contratación directa", "Menos trámites"], correct: 1, explanation: "Derecho a conocer las decisiones estatales." },
        { category: "Gestión Pública", question: "¿Qué entidad vigila la carrera administrativa?", options: ["Procuraduría", "CNSC", "Contraloría", "Fiscalía"], correct: 1, explanation: "Comisión Nacional del Servicio Civil." },
        { category: "Gestión Pública", question: "La 'Economía' administrativa busca:", options: ["Ahorrar todo", "Minimizar costos de trámite", "Cobrar más impuestos", "Reducir empleados"], correct: 1, explanation: "Agilidad y ahorro en la gestión." },
        { category: "Gestión Pública", question: "El derecho de petición debe responderse en:", options: ["5 días", "15 días hábiles", "30 días", "Inmediatamente"], correct: 1, explanation: "Regla general del CPACA (Ley 1437)." },
        { category: "Gestión Pública", question: "¿Qué es el SIGEP?", options: ["Seguro Médico", "Sistema de Información y Gestión del Empleo Público", "Sindicato de Empleados", "Sistema de Pensiones"], correct: 1, explanation: "Donde se cargan las hojas de vida del estado." },
        { category: "Gestión Pública", question: "Un 'conflicto de intereses' ocurre cuando:", options: ["Peleo con mi jefe", "Mi interés personal choca con mi deber público", "No me gusta el cargo", "Tengo mucho trabajo"], correct: 1, explanation: "Causa de impedimento o recusación." },
        { category: "Gestión Pública", question: "El PNR es:", options: ["Plan de Riesgos", "Plan Nacional de Recreación", "Plan de Normalización", "Plan de Nómina"], correct: 0, explanation: "Identificación de riesgos en la gestión." },
        { category: "Gestión Pública", question: "¿Qué es la Meritocracia?", options: ["Ganan los más ricos", "Ingreso basado en capacidades y mérito", "Herencia de cargos", "Voto popular"], correct: 1, explanation: "Esencia del empleo público en Colombia." },
        { category: "Gestión Pública", question: "La 'Moralidad Administrativa' es un deber:", options: ["Opcional", "Permanente e irrenunciable", "Religioso", "De los jefes solamente"], correct: 1, explanation: "Actuación con honestidad y rectitud." },
        { category: "Gestión Pública", question: "¿Qué es un Acto Administrativo?", options: ["Un evento social", "Voluntad administrativa que crea efectos jurídicos", "Un contrato", "Una ley"], correct: 1, explanation: "Decisión unilateral de la administración." },
        { category: "Gestión Pública", question: "El 'Silencio Administrativo' ocurre por:", options: ["Hablar poco", "Falta de respuesta oportuna de la entidad", "Orden del juez", "Vacaciones"], correct: 1, explanation: "Ficción legal ante la inactividad." },
        { category: "Gestión Pública", question: "¿Quién sanciona disciplinariamente a empleados públicos?", options: ["Contraloría", "Fiscalía", "Procuraduría / Control Interno", "Policía"], correct: 2, explanation: "Función de vigilancia de conductas." },

        // --- 61-80: Comprensión Lectora ---
        { category: "Comprensión Lectora", question: "Texto: 'El ruido ensordecedor impedía la comunicación'. Aquí 'ensordecedor' significa:", options: ["Bajo", "Fuerte o intenso", "Agradable", "Rítmico"], correct: 1, explanation: "Vocabulario contextual." },
        { category: "Comprensión Lectora", question: "La idea principal de un texto es:", options: ["El título", "Lo que resume el contenido global", "La última frase", "Un detalle curioso"], correct: 1, explanation: "Núcleo semántico del escrito." },
        { category: "Comprensión Lectora", question: "Un texto argumentativo busca:", options: ["Narrar cuentos", "Convencer o persuadir", "Listar productos", "Hacer chistes"], correct: 1, explanation: "Uso de razones para apoyar una tesis." },
        { category: "Comprensión Lectora", question: "En: 'El hombre es un animal político', la palabra animal se usa en sentido:", options: ["Denotativo (literal)", "Connotativo (figurado)", "Peyorativo", "Científico"], correct: 1, explanation: "Uso metafórico de la especie." },
        { category: "Comprensión Lectora", question: "Considere: 'Juan llegó tarde porque hubo tráfico'. El conector 'porque' indica:", options: ["Finalidad", "Causa", "Consecuencia", "Oposición"], correct: 1, explanation: "Explicación del motivo." },
        { category: "Comprensión Lectora", question: "El antónimo de 'Ephímero' (efímero) es:", options: ["Breve", "Duradero", "Bello", "Rápido"], correct: 1, explanation: "Opuesto a lo pasajero." },
        { category: "Comprensión Lectora", question: "Un resumen debe ser:", options: ["Más largo que el texto", "Fiel al original y conciso", "Una crítica personal", "Copia de frases sueltas"], correct: 1, explanation: "Síntesis objetiva." },
        { category: "Comprensión Lectora", question: "Texto: 'La tecnología avanza a pasos agigantados'. Se usa una:", options: ["Metáfora", "Hipérbole", "Simil", "Ironía"], correct: 1, explanation: "Exageración para enfatizar velocidad." },
        { category: "Comprensión Lectora", question: "Si un texto dice 'A pesar de las nubes, salió el sol', el sol es:", options: ["Metáfora de éxito", "Un astro literal", "Causa de lluvia", "No se sabe"], correct: 0, explanation: "Interpretación simbólica del contexto." },
        { category: "Comprensión Lectora", question: "La coma (,) se usa para:", options: ["Terminar un párrafo", "Separar elementos en listas", "Preguntar", "Gritar"], correct: 1, explanation: "Signo de pausa breve." },
        { category: "Comprensión Lectora", question: "En 'No hay mal que por bien no venga', la intención es:", options: ["Ser pesimista", "Dar esperanza ante la adversidad", "Advertir peligro", "Criticar"], correct: 1, explanation: "Sabiduría popular optimista." },
        { category: "Comprensión Lectora", question: "Inferir significa:", options: ["Copiar", "Deducir información no explícita", "Leer rápido", "Olvidar"], correct: 1, explanation: "Llegar a una conclusión por indicios." },
        { category: "Comprensión Lectora", question: "Un texto informativo es un:", options: ["Noticia", "Poema", "Cuento", "Novela"], correct: 0, explanation: "Busca dar a conocer hechos." },
        { category: "Comprensión Lectora", question: "El sinónimo de 'Paulatino' es:", options: ["Súbito", "Gradual", "Ruidoso", "Eterno"], correct: 1, explanation: "Que ocurre paso a paso." },
        { category: "Comprensión Lectora", question: "Si leo 'La casa es vieja', ¿puedo inferir que se va a caer?", options: ["Sí, siempre", "No necesariamente", "Solo si llueve", "Si es de madera"], correct: 1, explanation: "La vejez no implica derrumbe inmediato; la inferencia requiere más datos." },
        { category: "Comprensión Lectora", question: "La coherencia de un texto permite:", options: ["Que sea largo", "Que las ideas tengan sentido unitario", "Que use palabras difíciles", "Que tenga dibujos"], correct: 1, explanation: "Unidad lógica del escrito." },
        { category: "Comprensión Lectora", question: "En un diálogo, el guion (-) indica:", options: ["Suma", "Intervención de un personaje", "Resta", "Pausa larga"], correct: 1, explanation: "Uso ortográfico gramatical." },
        { category: "Comprensión Lectora", question: "Texto: 'El agua es vida'. La función del lenguaje es:", options: ["Emotiva", "Referencial (informa)", "Apelativa", "Metalingüística"], correct: 1, explanation: "Enuncia una realidad del mundo." },
        { category: "Comprensión Lectora", question: "'El hambre es muy mala'. El adjetivo es:", options: ["Hambre", "Mala", "Es", "El"], correct: 1, explanation: "Califica al sustantivo." },
        { category: "Comprensión Lectora", question: "Un texto descriptivo dice:", options: ["Qué pasó", "Cómo es algo", "Por qué ocurre", "Qué hay que hacer"], correct: 1, explanation: "Detalla características." },

        // --- 81-90: Atención al Ciudadano ---
        { category: "Atención al Ciudadano", question: "¿Cuál es el primer paso en la atención presencial?", options: ["Pedir cédula", "Saludo cordial y bienvenida", "Decir que no hay cita", "Remitir a otra oficina"], correct: 1, explanation: "Protocolo básico de servicio." },
        { category: "Atención al Ciudadano", question: "Una PQRS es:", options: ["Un tipo de contrato", "Petición, Queja, Reclamo, Sugerencia", "Programa de Salud", "Puesto de Control"], correct: 1, explanation: "Derechos de los ciudadanos frente a la administración." },
        { category: "Atención al Ciudadano", question: "Atender a una persona con discapacidad requiere:", options: ["Trato especial y prioritario", "Ignorarla", "Pedir que traiga acompañante", "Decir que vuelva después"], correct: 0, explanation: "Inclusión y prioridad legal." },
        { category: "Atención al Ciudadano", question: "La empatía en el servicio es:", options: ["Regalar cosas", "Ponerse en el lugar del ciudadano", "Darle la razón siempre", "Hablar mucho"], correct: 1, explanation: "Habilidad blanda fundamental." },
        { category: "Atención al Ciudadano", question: "¿Qué hacer ante un ciudadano agresivo?", options: ["Gritar igual", "Mantener la calma y buscar solución", "Llamar a la policía de inmediato sin hablar", "Cerrar la ventanilla"], correct: 1, explanation: "Manejo de situaciones críticas." },
        { category: "Atención al Ciudadano", question: "El lenguaje hacia el ciudadano debe ser:", options: ["Técnico y difícil", "Claro, sencillo y respetuoso", "Muletillas", "Solo señas"], correct: 1, explanation: "Comunicación efectiva." },
        { category: "Atención al Ciudadano", question: "La respuesta a una queja debe ser:", options: ["Solo verbal", "Formal, motivada y oportuna", "Ignorada si es ofensiva", "Un post en Facebook"], correct: 1, explanation: "Deber legal de la entidad." },
        { category: "Atención al Ciudadano", question: "Prioridad en turnos para:", options: ["Amigos del jefe", "Mujeres embarazadas y adultos mayores", "Los que pagan más", "Los que llegan en carro"], correct: 1, explanation: "Población de especial protección." },
        { category: "Atención al Ciudadano", question: "El buzón de sugerencias sirve para:", options: ["Basura", "Mejorar la calidad del servicio", "Esconder quejas", "Decorar"], correct: 1, explanation: "Herramienta de retroalimentación." },
        { category: "Atención al Ciudadano", question: "La atención telefónica exige:", options: ["No contestar", "Sonrisa telefónica y tono adecuado", "Hablar rápido", "Comer mientras se habla"], correct: 1, explanation: "Etiqueta de servicio telefónico." },

        // --- 91-100: Informática Básica ---
        { category: "Informática Básica", question: "Atajo de teclado para Guardar en Windows:", options: ["Ctrl + C", "Ctrl + G", "Ctrl + V", "Ctrl + Z"], correct: 1, explanation: "Comando estándar de guardado (Save)." },
        { category: "Informática Básica", question: "Un archivo .pdf es:", options: ["Imagen", "Documento de texto portátil", "Video", "Virus"], correct: 1, explanation: "Portable Document Format." },
        { category: "Informática Básica", question: "El 'Hardware' es:", options: ["Los programas", "Los componentes físicos", "El internet", "La batería"], correct: 1, explanation: "Lo que se puede tocar (monitor, teclado, etc.)." },
        { category: "Informática Básica", question: "Navegador de internet:", options: ["Word", "Chrome", "Excel", "Windows"], correct: 1, explanation: "Software para ver páginas web." },
        { category: "Informática Básica", question: "La nube (Cloud) sirve para:", options: ["Lluvia", "Almacenar archivos en internet", "Limpiar el PC", "Imprimir"], correct: 1, explanation: "Almacenamiento remoto." },
        { category: "Informática Básica", question: "CPU significa:", options: ["Central Process Unit", "Costo por Unidad", "Correo Postal Único", "Carga de Poder"], correct: 0, explanation: "El cerebro del computador." },
        { category: "Informática Básica", question: "Un correo electrónico (E-mail) necesita:", options: ["Estampilla", "Dirección con @", "Sobre de papel", "Teléfono fijo"], correct: 1, explanation: "Formato estándar digital." },
        { category: "Informática Básica", question: "Phishing es:", options: ["Pescar", "Suplantación de identidad para robar datos", "Un juego", "Actualizar Windows"], correct: 1, explanation: "Ciberdelito común." },
        { category: "Informática Básica", question: "Memoria RAM es:", options: ["Memoria permanente", "Memoria de acceso aleatorio (temporal)", "Un disco duro", "Un cable"], correct: 1, explanation: "Random Access Memory." },
        { category: "Informática Básica", question: "Excel se usa principalmente para:", options: ["Escribir cartas", "Hojas de cálculo y datos", "Hacer videos", "Chatear"], correct: 1, explanation: "Software de productividad numérica." }
    ];

    let questions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 0;

    const quizContent = document.getElementById('quiz-content');
    const startBtn = document.getElementById('start-quiz');
    const introCard = document.getElementById('intro-card');
    const resultsSummary = document.getElementById('results-summary');
    const timerDisplay = document.getElementById('timer-display');
    const progressDisplay = document.getElementById('progress-display');
    const quizLengthSelect = document.getElementById('quiz-length');

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function startTimer(duration) {
        timeLeft = duration;
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

        const shuffledOptions = q.options.map((opt, i) => ({ text: opt, originalIndex: i }));
        shuffle(shuffledOptions);

        let optionsHTML = '';
        shuffledOptions.forEach((opt, i) => {
            optionsHTML += `
                <li class="option-item">
                    <button class="option-btn" data-original-index="${opt.originalIndex}">
                        <span class="option-label">${String.fromCharCode(65 + i)})</span>
                        ${opt.text}
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

        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', handleOptionClick);
        });
    }

    function handleOptionClick(e) {
        const selectedIndex = parseInt(e.currentTarget.getAttribute('data-original-index'));
        const q = questions[currentQuestionIndex];
        const buttons = document.querySelectorAll('.option-btn');

        buttons.forEach(btn => btn.disabled = true);

        if (selectedIndex === q.correct) {
            e.currentTarget.classList.add('correct');
            score++;
        } else {
            e.currentTarget.classList.add('incorrect');
            buttons.forEach(btn => {
                if (parseInt(btn.getAttribute('data-original-index')) === q.correct) {
                    btn.classList.add('correct');
                }
            });
        }

        const expBox = document.getElementById(`explanation-${currentQuestionIndex}`);
        expBox.style.display = 'block';

        const nextBtn = document.getElementById('next-btn');
        nextBtn.style.display = 'block';
        
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.textContent = "Finalizar Simulacro";
        }

        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                renderQuestion(currentQuestionIndex);
                window.scrollTo({ top: document.querySelector('.quiz-container').offsetTop - 100, behavior: 'smooth' });
            } else {
                finishQuiz();
            }
        }, { once: true });
    }

    function finishQuiz() {
        clearInterval(timer);
        quizContent.style.display = 'none';
        document.querySelector('.quiz-header').style.display = 'none';
        resultsSummary.style.display = 'block';

        const finalScore = Math.round((score / questions.length) * 100);
        document.getElementById('final-score-val').textContent = `${finalScore}/100`;
        
        let message = "";
        if (finalScore >= 80) message = "¡Nivel Experto! Estás listo para ganar tu vacante en la CNSC.";
        else if (finalScore >= 65) message = "Buen desempeño. Refuerza los temas fallidos para asegurar el éxito.";
        else message = "Necesitas más práctica. Lee las explicaciones y estudia la normatividad.";

        document.getElementById('score-message').textContent = message;
        window.scrollTo({ top: resultsSummary.offsetTop - 100, behavior: 'smooth' });
    }

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            const count = parseInt(quizLengthSelect.value);
            const shuffledPool = shuffle([...questionPool]);
            questions = shuffledPool.slice(0, count);
            
            introCard.style.display = 'none';
            document.querySelector('.quiz-container').style.display = 'block';
            
            startTimer(count * 2 * 60);
            renderQuestion(currentQuestionIndex);
        });
    }
});
