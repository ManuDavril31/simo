/**
 * Lógica del Simulacro de Razonamiento Lógico (CNSC/SIMO)
 * Banco de 100 Preguntas con Aleatorización.
 */

document.addEventListener('DOMContentLoaded', () => {
    const questionPool = [
        // --- 1-30: Razonamiento Numérico ---
        { category: "Razonamiento Numérico", question: "Si un grifo llena un tanque en 4 horas y otro lo hace en 6 horas, ¿cuánto tardan los dos juntos?", options: ["2.4 horas", "5 horas", "10 horas", "3.2 horas"], correct: 0, explanation: "1/4 + 1/6 = 5/12. Tiempo = 12/5 = 2.4 horas." },
        { category: "Razonamiento Numérico", question: "Un televisor cuesta $800. Si se le aplica un descuento del 15% y luego un recargo del 10% sobre el nuevo precio, ¿cuál es el precio final?", options: ["$748", "$760", "$720", "$740"], correct: 0, explanation: "800 * 0.85 = 680. 680 * 1.1 = 748." },
        { category: "Razonamiento Numérico", question: "Si 3 camisas cuestan $120.000, ¿cuánto cuestan 5 camisas del mismo tipo?", options: ["$200.000", "$180.000", "$150.000", "$240.000"], correct: 0, explanation: "Cada una vale 40.000. 40.000 * 5 = 200.000." },
        { category: "Razonamiento Numérico", question: "¿Qué número falta en la serie: 2, 4, 8, 14, 22, ...?", options: ["32", "30", "34", "28"], correct: 0, explanation: "La diferencia aumenta de 2 en 2: +2, +4, +6, +8. El siguiente es +10: 22+10=32." },
        { category: "Razonamiento Numérico", question: "Un tren de 200m de largo cruza un túnel de 400m en 30 segundos. ¿Cuál es su velocidad en m/s?", options: ["20 m/s", "10 m/s", "15 m/s", "30 m/s"], correct: 0, explanation: "Distancia total = 200 + 400 = 600m. Velocidad = 600 / 30 = 20 m/s." },
        { category: "Razonamiento Numérico", question: "El promedio de 3 números es 20. Si dos de ellos son 15 y 25, ¿cuál es el tercero?", options: ["20", "18", "22", "25"], correct: 0, explanation: "Suma total = 20 * 3 = 60. 60 - (15 + 25) = 20." },
        { category: "Razonamiento Numérico", question: "Si x + y = 10 y x - y = 2, ¿cuánto es x*y?", options: ["24", "18", "16", "20"], correct: 0, explanation: "x=6, y=4. 6 * 4 = 24." },
        { category: "Razonamiento Numérico", question: "¿Cuántos segundos hay en 2.5 horas?", options: ["9000", "7200", "8400", "9600"], correct: 0, explanation: "2.5 * 3600 = 9000." },
        { category: "Razonamiento Numérico", question: "Si 2 personas pintan una casa en 4 días, ¿cuántas personas se necesitan para pintarla en 1 día?", options: ["8", "6", "4", "10"], correct: 0, explanation: "2 * 4 = 8 personas-día. Para 1 día: 8 personas." },
        { category: "Razonamiento Numérico", question: "El área de un círculo es 16π. ¿Cuál es su radio?", options: ["4", "8", "16", "2"], correct: 0, explanation: "πr² = 16π -> r² = 16 -> r = 4." },
        { category: "Razonamiento Numérico", question: "¿Qué número sigue: 1, 1, 2, 3, 5, 8, ...?", options: ["13", "11", "12", "15"], correct: 0, explanation: "Sucesión de Fibonacci: cada número es la suma de los dos anteriores." },
        { category: "Razonamiento Numérico", question: "Si el 20% de un número es 50, ¿qué es el 50% de ese mismo número?", options: ["125", "100", "150", "200"], correct: 0, explanation: "Número = 250. 50% de 250 = 125." },
        { category: "Razonamiento Numérico", question: "Un estante tiene 3 libros de historia, 4 de ciencia y 2 de arte. Si saco uno al azar, ¿probabilidad de que sea ciencia?", options: ["4/9", "1/2", "3/9", "2/9"], correct: 0, explanation: "Total = 9. Probabilidad = 4/9." },
        { category: "Razonamiento Numérico", question: "¿Cuál es el valor de 2³ * 3²?", options: ["72", "48", "64", "54"], correct: 0, explanation: "8 * 9 = 72." },
        { category: "Razonamiento Numérico", question: "Si x/2 + 5 = 15, entonces x es:", options: ["20", "10", "30", "40"], correct: 0, explanation: "x/2 = 10 -> x = 20." },
        { category: "Razonamiento Numérico", question: "En un salón de 40 alumnos, el 75% pasó el examen. ¿Cuántos perdieron?", options: ["10", "20", "30", "5"], correct: 0, explanation: "El 25% perdió. 0.25 * 40 = 10." },
        { category: "Razonamiento Numérico", question: "Si A = 5 y B = 2, ¿qué es (A+B)² - (A-B)²?", options: ["40", "20", "25", "50"], correct: 0, explanation: "7² - 3² = 49 - 9 = 40. (O 4AB = 4*5*2=40)." },
        { category: "Razonamiento Numérico", question: "¿Cuál es el 5% de 10% de 20.000?", options: ["100", "200", "50", "10"], correct: 0, explanation: "10% de 20.000 = 2.000. 5% de 2.000 = 100." },
        { category: "Razonamiento Numérico", question: "Factorización de x² - 9:", options: ["(x+3)(x-3)", "(x-3)²", "(x+3)²", "x(x-9)"], correct: 0, explanation: "Diferencia de cuadrados." },
        { category: "Razonamiento Numérico", question: "Si un reloj marca las 3:00, ¿qué ángulo forman las manecillas?", options: ["90°", "180°", "45°", "120°"], correct: 0, explanation: "Cada hora representa 30°. 3 * 30 = 90°." },
        { category: "Razonamiento Numérico", question: "Si 5x = 100, entonces x/4 es:", options: ["5", "10", "20", "4"], correct: 0, explanation: "x = 20. 20 / 4 = 5." },
        { category: "Razonamiento Numérico", question: "Suma de los primeros 10 números naturales (1 al 10):", options: ["55", "45", "50", "60"], correct: 0, explanation: "n(n+1)/2 = 10*11/2 = 55." },
        { category: "Razonamiento Numérico", question: "Si un litro de leche cuesta $2.500 y sube el 20%, nuevo precio:", options: ["$3.000", "$2.800", "$3.200", "$2.700"], correct: 0, explanation: "2.500 * 1.2 = 3.000." },
        { category: "Razonamiento Numérico", question: "¿Qué número falta: 100, 90, 81, 73, ...?", options: ["66", "65", "64", "67"], correct: 0, explanation: "Se resta -10, -9, -8. El siguiente es -7: 73-7=66." },
        { category: "Razonamiento Numérico", question: "Volumen de un cubo de lado 3cm:", options: ["27 cm³", "9 cm³", "18 cm³", "54 cm³"], correct: 0, explanation: "3 * 3 * 3 = 27." },
        { category: "Razonamiento Numérico", question: "Si 4 hombres hacen 8 hoyos en 2 días, ¿1 hombre cuántos hace en 1 día?", options: ["1", "2", "4", "0.5"], correct: 0, explanation: "Capacidad total = 8 / (4*2) = 1 hoyo por hombre-día." },
        { category: "Razonamiento Numérico", question: "¿Cuál es el valor de la expresión 10 - 2 * 3 + 4?", options: ["8", "28", "12", "0"], correct: 0, explanation: "Orden: 10 - 6 + 4 = 8." },
        { category: "Razonamiento Numérico", question: "Si el perímetro de un cuadrado es 20, su área es:", options: ["25", "16", "20", "10"], correct: 0, explanation: "Lado = 5. Área = 25." },
        { category: "Razonamiento Numérico", question: "Si x es un número par, ¿cuál de estos es siempre impar?", options: ["x + 1", "2x", "x²", "x + 2"], correct: 0, explanation: "Par + 1 siempre es impar." },
        { category: "Razonamiento Numérico", question: "3/4 de 1/2 es:", options: ["3/8", "3/4", "1/2", "1/4"], correct: 0, explanation: "Multiplicación de fracciones: 3/8." },

        // --- 31-55: Razonamiento Espacial ---
        { category: "Razonamiento Espacial", question: "Si giramos un cuadrado 90 grados a la derecha 4 veces, ¿en qué posición queda?", options: ["Original", "Invertido", "90 grados", "270 grados"], correct: 0, explanation: "360 grados es una rotación completa." },
        { category: "Razonamiento Espacial", question: "¿Cuál de estas figuras tiene más lados?", options: ["Hexágono", "Pentágono", "Octágono", "Cuadrado"], correct: 2, explanation: "Octágono tiene 8." },
        { category: "Razonamiento Espacial", question: "Un cubo tiene cuántas caras?", options: ["6", "8", "4", "12"], correct: 0, explanation: "Geometría básica." },
        { category: "Razonamiento Espacial", question: "Si ves un objeto desde arriba y ves un círculo, pero desde el frente ves un rectángulo, el objeto es:", options: ["Cilindro", "Esfera", "Cono", "Cubo"], correct: 0, explanation: "Vistas espaciales." },
        { category: "Razonamiento Espacial", question: "¿Cuántos vértices tiene un triángulo?", options: ["3", "2", "4", "1"], correct: 0, explanation: "Puntos de unión." },
        { category: "Razonamiento Espacial", question: "Si doblas un papel cuadrado por la mitad y luego otra vez por la mitad, y cortas una esquina, ¿cuántos agujeros hay al abrirlo?", options: ["4", "2", "1", "8"], correct: 0, explanation: "Simetría de plegado." },
        { category: "Razonamiento Espacial", question: "La sombra de un poste al mediodía (sobre el ecuador) es:", options: ["Mínima", "Máxima", "Lateral", "No tiene"], correct: 0, explanation: "Posición solar." },
        { category: "Razonamiento Espacial", question: "¿Qué forma tiene la base de una pirámide egipcia?", options: ["Cuadrada", "Triangular", "Circular", "Pentagonal"], correct: 0, explanation: "Estructura clásica." },
        { category: "Razonamiento Espacial", question: "Si un reloj refleja las 3:00 en un espejo, ¿qué hora parece marcar?", options: ["9:00", "3:00", "6:00", "12:00"], correct: 0, explanation: "Inversión lateral." },
        { category: "Razonamiento Espacial", question: "Un prisma con base pentagonal tiene cuántas caras en total?", options: ["7", "5", "10", "12"], correct: 0, explanation: "2 bases + 5 laterales = 7." },
        { category: "Razonamiento Espacial", question: "¿Cuál es el área de un cubo de lado 1?", options: ["6", "1", "4", "8"], correct: 0, explanation: "6 caras de área 1." },
        { category: "Razonamiento Espacial", question: "Si rotas la letra 'M' 180 grados, ¿qué letra parece?", options: ["W", "E", "3", "M"], correct: 0, explanation: "Simetría rotacional." },
        { category: "Razonamiento Espacial", question: "Número de diagonales de un cuadrado:", options: ["2", "4", "0", "1"], correct: 0, explanation: "Une vértices no adyacentes." },
        { category: "Razonamiento Espacial", question: "Si una caja mide 2x2x2, ¿cuántas cajas de 1x1x1 caben?", options: ["8", "4", "6", "2"], correct: 0, explanation: "Volumen 8 / Volumen 1 = 8." },
        { category: "Razonamiento Espacial", question: "¿Qué figura NO es plana?", options: ["Esfera", "Círculo", "Triángulo", "Trapecio"], correct: 0, explanation: "La esfera es tridimensional." },
        { category: "Razonamiento Espacial", question: "Un decágono tiene:", options: ["10 lados", "12 lados", "8 lados", "20 lados"], correct: 0, explanation: "Prefijo deca-." },
        { category: "Razonamiento Espacial", question: "Si caminas 1km al Norte y 1km al Este, ¿en qué dirección estás de tu origen?", options: ["Noreste", "Noroeste", "Sureste", "Sudoeste"], correct: 0, explanation: "Rosa de los vientos." },
        { category: "Razonamiento Espacial", question: "La diagonal de un rectángulo de 3x4 mide:", options: ["5", "7", "12", "6"], correct: 0, explanation: "Teorema de Pitágoras: √(3²+4²) = 5." },
        { category: "Razonamiento Espacial", question: "¿Cuál es el opuesto de arriba en una brújula tridimensional?", options: ["Abajo", "Atrás", "Izquierda", "Derecha"], correct: 0, explanation: "Ejes espaciales." },
        { category: "Razonamiento Espacial", question: "Si un dado tiene la cara 1 opuesta a la 6, ¿cuánto suman las caras opuestas?", options: ["7", "6", "5", "8"], correct: 0, explanation: "Regla estándar de dados." },
        { category: "Razonamiento Espacial", question: "¿Qué polígono tiene el menor número de lados?", options: ["Triángulo", "Cuadrado", "Círculo", "Punto"], correct: 0, explanation: "Se necesitan 3 líneas para cerrar un área." },
        { category: "Razonamiento Espacial", question: "La palabra 'OSO' se ve igual en un espejo?", options: ["Sí", "No", "Solo la O", "Solo la S"], correct: 0, explanation: "Simetría axial de las letras." },
        { category: "Razonamiento Espacial", question: "Si un cilindro se corta paralelo a la base, la sección es:", options: ["Círculo", "Rectángulo", "Óvalo", "Triángulo"], correct: 0, explanation: "Geometría de planos." },
        { category: "Razonamiento Espacial", question: "Un tetraedro regular tiene cuántos triángulos?", options: ["4", "3", "6", "8"], correct: 0, explanation: "Prefijo tetra- (4)." },
        { category: "Razonamiento Espacial", question: "Si una figura tiene simetría central, significa que:", options: ["Se ve igual al rotarla 180°", "Tiene un eje vertical", "Es un círculo", "Es roja"], correct: 0, explanation: "Definición de simetría de punto." },

        // --- 56-80: Razonamiento Abstracto ---
        { category: "Razonamiento Abstracto", question: "¿Qué sigue? Arriba, Derecha, Abajo, ...", options: ["Izquierda", "Arriba", "Diagonal", "Centro"], correct: 0, explanation: "Rotación horaria." },
        { category: "Razonamiento Abstracto", question: "Círculo es a Esfera como Cuadrado es a:", options: ["Cubo", "Rectángulo", "Triángulo", "Área"], correct: 0, explanation: "Relación 2D a 3D." },
        { category: "Razonamiento Abstracto", question: "¿Qué figura sobra en el grupo: Círculo, Óvalo, Cuadrado, Elipse?", options: ["Cuadrado", "Círculo", "Óvalo", "Elipse"], correct: 0, explanation: "Los demás no tienen vértices." },
        { category: "Razonamiento Abstracto", question: "Si A > B y B > C, entonces:", options: ["A > C", "A < C", "A = C", "No se sabe"], correct: 0, explanation: "Transitividad." },
        { category: "Razonamiento Abstracto", question: "Blanco es a Negro como Día es a:", options: ["Noche", "Luz", "Sol", "Tarde"], correct: 0, explanation: "Antónimos." },
        { category: "Razonamiento Abstracto", question: "Diferencia entre 1, 2, 4, 7... ¿Qué sigue?", options: ["11", "10", "12", "9"], correct: 0, explanation: "Serie que suma +1, +2, +3. Sigue +4: 7+4=11." },
        { category: "Razonamiento Abstracto", question: "Paraguas es a Lluvia como Sombrilla es a:", options: ["Sol", "Viento", "Agua", "Nieve"], correct: 0, explanation: "Relación de protección." },
        { category: "Razonamiento Abstracto", question: "Si 'Z' es 1 y 'A' es 26, ¿cuánto es 'B'?", options: ["25", "2", "26", "24"], correct: 0, explanation: "Orden alfabético inverso." },
        { category: "Razonamiento Abstracto", question: "¿Cuál es el intruso: Perro, Gato, León, Silla?", options: ["Silla", "León", "Gato", "Perro"], correct: 0, explanation: "Es el único objeto inanimado." },
        { category: "Razonamiento Abstracto", question: "Si todos los hombres son mortales y Sócrates es hombre...", options: ["Sócrates es mortal", "Sócrates es filósofo", "El filósofo es hombre", "Mortal es Sócrates"], correct: 0, explanation: "Silogismo clásico." },
        { category: "Razonamiento Abstracto", question: "Si 1=5, 2=25, 3=125, ¿cuánto es 5?", options: ["1", "625", "3125", "5"], correct: 0, explanation: "La primera premisa dice 1=5, por tanto 5=1." },
        { category: "Razonamiento Abstracto", question: "Dedo es a Mano como Pétalo es a:", options: ["Flor", "Tallo", "Hoja", "Raíz"], correct: 0, explanation: "Relación parte-todo." },
        { category: "Razonamiento Abstracto", question: "Si un avión cae en la frontera, ¿dónde entierran supervivientes?", options: ["En ningún lado", "País A", "País B", "En la mitad"], correct: 0, explanation: "A los supervivientes no se les entierra." },
        { category: "Razonamiento Abstracto", question: "¿Qué sigue? +, -, +, -, ...", options: ["+", "-", "*", "/"], correct: 0, explanation: "Alternancia simple." },
        { category: "Razonamiento Abstracto", question: "Agua es a Sed as Comida es a:", options: ["Hambre", "Sed", "Boca", "Sueño"], correct: 0, explanation: "Necesidad/Satisfacción." },
        { category: "Razonamiento Abstracto", question: "Si subes una montaña por el sur, ¿el viento a favor viene del?", options: ["Sur", "Norte", "Este", "Oeste"], correct: 0, explanation: "Dirección del movimiento." },
        { category: "Razonamiento Abstracto", question: "Un hombre tiene 5 hijas, cada una un hermano. ¿Hijos en total?", options: ["6", "10", "5", "11"], correct: 0, explanation: "Las 5 comparten el mismo hermano." },
        { category: "Razonamiento Abstracto", question: "Si 'PALABRA' tiene 7 letras, 'LETRERO' tiene:", options: ["7", "6", "8", "5"], correct: 0, explanation: "Conteo directo." },
        { category: "Razonamiento Abstracto", question: "Luz es a Oscuridad como Silencio es a:", options: ["Ruido", "Paz", "Miedo", "Voz"], correct: 0, explanation: "Antónimos." },
        { category: "Razonamiento Abstracto", question: "Si giras un triángulo equilátero 120°, ¿parece igual?", options: ["Sí", "No", "Solo si es rojo", "Solo si es grande"], correct: 0, explanation: "Simetría rotacional de 360/3." },
        { category: "Razonamiento Abstracto", question: "Pintor es a Pincel como Escritor es a:", options: ["Pluma", "Libro", "Palabra", "Idea"], correct: 0, explanation: "Herramienta del oficio." },
        { category: "Razonamiento Abstracto", question: "Un caracol sube 3m de día y baja 2m de noche. ¿Cuándo sale de 10m?", options: ["8 días", "10 días", "7 días", "9 días"], correct: 0, explanation: "En el día 8 alcanza el tope antes de bajar." },
        { category: "Razonamiento Abstracto", question: "¿Qué palabra no encaja? Rojo, Azul, Verde, Pesado.", options: ["Pesado", "Rojo", "Azul", "Verde"], correct: 0, explanation: "Los demás son colores." },
        { category: "Razonamiento Abstracto", question: "Si un médico te da 3 pastillas y dices que tomes una cada 30 min, ¿cuánto duran?", options: ["1 hora", "1.5 horas", "2 horas", "30 min"], correct: 0, explanation: "T0: 1a, T30: 2a, T60: 3a." },
        { category: "Razonamiento Abstracto", question: "Norte es a Sur como Este es a:", options: ["Oeste", "Arriba", "Abajo", "Norte"], correct: 0, explanation: "Puntos cardinales opuestos." },

        // --- 81-100: Lógica Proposicional y Analítica ---
        { category: "Lógica Analítica", question: "Si no llueve, entonces voy al parque. Llueve. ¿Qué sucede?", options: ["No se puede concluir", "Voy al parque", "No voy al parque", "Me mojo"], correct: 0, explanation: "Falacia de negar el antecedente." },
        { category: "Lógica Analítica", question: "La negación de 'Todos son honestos' es:", options: ["Al menos uno no es honesto", "Ninguno es honesto", "Todos son mentirosos", "Juan es honesto"], correct: 0, explanation: "Negación de un cuantificador universal." },
        { category: "Lógica Analítica", question: "Si P entonces Q. Q es falso. Luego:", options: ["P es falso", "P es verdadero", "Q es verdadero", "No se sabe"], correct: 0, explanation: "Modus Tollens." },
        { category: "Lógica Analítica", question: "Un mentiroso siempre miente. Si dice 'estoy mintiendo', ¿qué pasa?", options: ["Paradoja", "Dice la verdad", "Miente", "Se calla"], correct: 0, explanation: "La paradoja del mentiroso." },
        { category: "Lógica Analítica", question: "Si Juan es más alto que Pedro y Pedro es más alto que Luis...", options: ["Juan es el más alto", "Luis es el más alto", "Pedro es el más alto", "Son iguales"], correct: 0, explanation: "Ordenación." },
        { category: "Lógica Analítica", question: "Condición necesaria para ser ciudadano es ser mayor de edad. Juan es ciudadano, entonces:", options: ["Juan es mayor de edad", "Juan tiene cédula", "Juan puede votar", "Juan es colombiano"], correct: 0, explanation: "Deducción de condición necesaria." },
        { category: "Lógica Analítica", question: "Si estudio, paso. No pasé. Por lo tanto:", options: ["No estudié", "Estudié poco", "El examen fue difícil", "Estudié mucho"], correct: 0, explanation: "Deducción lógica pura." },
        { category: "Lógica Analítica", question: "O como carne o como pollo. Comí pollo. ¿Comí carne?", options: ["No", "Sí", "Tal vez", "A veces"], correct: 0, explanation: "Disyunción excluyente implícita." },
        { category: "Lógica Analítica", question: "Todos los círculos son redondos. Esta moneda es redonda. ¿Es un círculo?", options: ["No necesariamente", "Sí", "No", "Tal vez"], correct: 0, explanation: "Falacia de afirmación del consecuente." },
        { category: "Lógica Analítica", question: "Si A=B y B=3, entonces A+B es:", options: ["6", "3", "A3", "0"], correct: 0, explanation: "3+3 = 6." },
        { category: "Lógica Analítica", question: "La frase 'Si parpadeas, te lo pierdes' implica que:", options: ["Parpadear es suficiente para perderlo", "No parpadear garantiza verlo", "Perderlo obliga a parpadear", "Verlo obliga a parpadear"], correct: 0, explanation: "Relación condicional." },
        { category: "Lógica Analítica", question: "Entre Juan y María tienen 10 pesos. Juan tiene 2 más que María. ¿Cuánto tiene María?", options: ["4", "6", "8", "5"], correct: 0, explanation: "x + (x+2) = 10 -> 2x = 8 -> x = 4." },
        { category: "Lógica Analítica", question: "Un carnicero mide 1.80m y calza 42. ¿Qué pesa?", options: ["Carne", "80 kilos", "Nada", "Mucho"], correct: 0, explanation: "Es su oficio." },
        { category: "Lógica Analítica", question: "Si un pato pone un huevo en la frontera, ¿de quién es?", options: ["De nadie (los patos no ponen huevos)", "País A", "País B", "Del pato"], correct: 0, explanation: "Los patos machos no ponen huevos. (Si fuera pata, sería de ella)." },
        { category: "Lógica Analítica", question: "A es el doble de B. B es 10. A es:", options: ["20", "5", "10", "30"], correct: 0, explanation: "2 * 10 = 20." },
        { category: "Lógica Analítica", question: "Si X está a la izquierda de Y, e Y a la izquierda de Z...", options: ["X está a la izquierda de Z", "Z está a la izquierda de X", "Y está en el medio", "A y C son correctas"], correct: 3, explanation: "Orden lineal." },
        { category: "Lógica Analítica", question: "Ningún pájaro es perro. Tobbi es perro. Luego:", options: ["Tobbi no es pájaro", "Tobbi es animal", "Tobbi vuela", "Ninguna"], correct: 0, explanation: "Exclusión de conjuntos." },
        { category: "Lógica Analítica", question: "Si 3 > 2 y 2 > 1, entonces el mayor es:", options: ["3", "2", "1", "0"], correct: 0, explanation: "Conteo directo." },
        { category: "Lógica Analítica", question: "La mitad de 2 más 2 es:", options: ["3", "2", "4", "1"], correct: 0, explanation: "(2/2) + 2 = 3. Si fuera 'La mitad de (2+2)' sería 2." },
        { category: "Lógica Analítica", question: "¿Qué pesa más, un kilo de plomo o un kilo de plumas?", options: ["Lo mismo", "Plomo", "Plumas", "Depende del viento"], correct: 0, explanation: "Ambos pesan un kilo." }
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
    const quizActive = document.getElementById('quiz-active');

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
            if (timeLeft <= 0) { clearInterval(timer); finishQuiz(); }
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
                <div style="margin-bottom: 0.8rem;">
                    <button class="quiz-engine-option" data-original-index="${opt.originalIndex}">
                        <span style="font-weight:700; margin-right:10px;">${String.fromCharCode(65 + i)})</span>
                        ${opt.text}
                    </button>
                </div>
            `;
        });

        quizContent.innerHTML = `
            <div style="animation: fadeIn 0.4s ease;">
                <span style="background: #eef2f7; color: #0059b3; padding: 4px 12px; border-radius: 20px; font-size: 0.85rem; margin-bottom: 10px; display: inline-block; font-weight:600;">${q.category}</span>
                <p style="font-size: 1.2rem; font-weight: 600; color: #003366; margin-bottom: 1.5rem; line-height: 1.6;">${q.question}</p>
                <div class="quiz-engine-options">
                    ${optionsHTML}
                </div>
                <div class="quiz-engine-explanation" id="explanation-${index}">
                    <h4 style="margin:0 0 0.5rem 0; color:#2e7d32;">💡 Explicación:</h4>
                    <p style="margin:0; color:#444;">${q.explanation}</p>
                </div>
                <div style="margin-top: 2rem; display: flex; justify-content: flex-end;">
                  <button id="next-btn" class="btn-download" style="display: none; width: 100%; max-width:300px;">Siguiente Pregunta</button>
                </div>
            </div>
        `;

        document.querySelectorAll('.quiz-engine-option').forEach(btn => {
            btn.addEventListener('click', handleOptionClick);
        });
    }

    function handleOptionClick(e) {
        const selectedIndex = parseInt(e.currentTarget.getAttribute('data-original-index'));
        const q = questions[currentQuestionIndex];
        const buttons = document.querySelectorAll('.quiz-engine-option');
        buttons.forEach(btn => btn.disabled = true);
        if (selectedIndex === q.correct) {
            e.currentTarget.classList.add('correct');
            score++;
        } else {
            e.currentTarget.classList.add('incorrect');
            buttons.forEach(btn => {
                if (parseInt(btn.getAttribute('data-original-index')) === q.correct) btn.classList.add('correct');
            });
        }
        document.getElementById(`explanation-${currentQuestionIndex}`).style.display = 'block';
        const nextBtn = document.getElementById('next-btn');
        nextBtn.style.display = 'block';
        if (currentQuestionIndex === questions.length - 1) nextBtn.textContent = "Finalizar Simulacro";
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                renderQuestion(currentQuestionIndex);
                window.scrollTo({ top: quizActive.offsetTop - 100, behavior: 'smooth' });
            } else { finishQuiz(); }
        }, { once: true });
    }

    function finishQuiz() {
        clearInterval(timer);
        quizActive.style.display = 'none';
        resultsSummary.style.display = 'block';
        const finalScore = Math.round((score / questions.length) * 100);
        document.getElementById('final-score-val').textContent = `${finalScore}/100`;
        let message = finalScore >= 80 ? "¡Excelente! Estás listo para ganar tu vacante." : finalScore >= 60 ? "Buen trabajo, sigue practicando." : "Necesitas mejorar tu lógica.";
        document.getElementById('score-message').textContent = message;
        window.scrollTo({ top: resultsSummary.offsetTop - 100, behavior: 'smooth' });
    }

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            const count = parseInt(quizLengthSelect.value);
            const shuffledPool = shuffle([...questionPool]);
            questions = shuffledPool.slice(0, count);
            introCard.style.display = 'none';
            quizActive.style.display = 'block';
            startTimer(count * 2 * 60);
            renderQuestion(currentQuestionIndex);
        });
    }
});

