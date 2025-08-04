const preguntas = [
    {
        pregunta: "¿Cuál es un derecho del paciente?",
        opciones: [
        "Recibir atención sin importar su religión",
        "Obedecer todas las órdenes médicas sin preguntar",
        "Esperar afuera del consultorio sin hablar"
        ],
        respuesta: 0
    },
    {
        pregunta: "¿Cuál es un deber del usuario?",
        opciones: [
        "Faltar a las citas médicas",
        "Informar al médico sobre síntomas y antecedentes",
        "Ignorar las recomendaciones médicas"
        ],
        respuesta: 1
    },
    {
    pregunta: "¿Un paciente puede pedir una segunda opinión médica?",
    opciones: ["No, eso es falta de respeto", "Sí, es un derecho", "Solo si el médico lo permite"],
    respuesta: 1
    },
    {
        pregunta: "¿Cuál es un deber del paciente con el sistema de salud?",
        opciones: [
        "Cuidar las instalaciones",
        "Decorar el consultorio",
        "Criticar al personal de salud"
        ],
        respuesta: 0
    },
    {
        pregunta: "¿Puede un niño ser informado sobre su estado de salud?",
        opciones: [
        "No, solo los adultos pueden saber",
        "Sí, de forma adecuada para su edad",
        "Solo si lo dice su mascota"
        ],
        respuesta: 1
    },
    {
        pregunta: "¿Qué debe hacer el usuario si no entiende algo del tratamiento?",
        opciones: [
        "Quedarse callado",
        "Pedir una explicación clara",
        "Irse sin preguntar nada"
    ],
    respuesta: 1
    },
    {
        pregunta: "¿Qué hacer si el servicio no fue adecuado?",
        opciones: [
        "Nada, no importa",
        "Reportarlo como derecho a reclamar",
        "Contárselo solo a un amigo"
        ],
        respuesta: 1
    },
    {
        pregunta: "¿Qué debe llevar el usuario a las citas?",
        opciones: [
        "Su historia clínica, documentos y respeto",
        "Una película y su celular",
        "Un disfraz"
        ],
        respuesta: 0
    }
];

let indice = 0;
let correctas = 0;
let incorrectas = 0;
let tiempoInicio;

const contenedorPregunta = document.getElementById("pregunta");
const contenedorOpciones = document.getElementById("opciones");
const resultado = document.getElementById("resultado");
const final = document.getElementById("final");
const btnSiguiente = document.getElementById("siguiente");

function mostrarPregunta() {
    resultado.textContent = "";
    const actual = preguntas[indice];
    contenedorPregunta.textContent = actual.pregunta;
    contenedorOpciones.innerHTML = "";

    actual.opciones.forEach((opcion, i) => {
        const div = document.createElement("div");
        div.textContent = opcion;
        div.classList.add("opcion");
        div.onclick = () => verificarRespuesta(i);
        contenedorOpciones.appendChild(div);
    });
}

function verificarRespuesta(i) {
    const correcta = preguntas[indice].respuesta;
    if (i === correcta) {
        resultado.textContent = "✅ ¡Correcto!";
        correctas++;
    } else {
        resultado.textContent = "❌ Incorrecto.";
        incorrectas++;
    }
    document.querySelectorAll('.opcion').forEach(btn => btn.onclick = null);
}

btnSiguiente.onclick = () => {
    if (indice === 0) tiempoInicio = new Date();
    indice++;
    if (indice < preguntas.length) {
        mostrarPregunta();
    } else {
        const tiempoFinal = new Date();
        const segundos = Math.floor((tiempoFinal - tiempoInicio) / 1000);
        contenedorPregunta.style.display = "none";
        contenedorOpciones.style.display = "none";
        btnSiguiente.style.display = "none";
        resultado.style.display = "none";
        final.classList.remove("oculto");
        final.innerHTML = `
        <h2>Juego terminado 🎉</h2>
        <p>Correctas: ${correctas}</p>
        <p>Incorrectas: ${incorrectas}</p>
        <p>Tiempo total: ${segundos} segundos</p>
        `;
    }
};

mostrarPregunta();
