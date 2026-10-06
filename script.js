function abrirCaja(){

    document
        .getElementById("inicio")
        .classList.add("oculto");

    document
        .getElementById("pantalla2")
        .classList.remove("oculto");
}

function irCorazon(){

    document
        .getElementById("pantalla2")
        .classList.add("oculto");

    document
        .getElementById("pantallaCorazon")
        .classList.remove("oculto");
}


/* ========================= */
/* CORAZÓN */
/* ========================= */

let indice = 0;

const mensajes = [

    "❤️ Tu sonrisa toda hermosa que aparece y automáticamente mejora mi día que digo AYAYAAAAAAAY 🙈",

    "❤️ Tus ojitos que brillan tan bonito que deberían estar catalogados como patrimonio nacional 😍",

    "❤️ Tus stickers de conejitos y tu amor por ellos 🐰",

    "❤️ Cuando hablas de tus clases de ballet mi príncipe de las flores (aunque no me gusta que te monten jajaja) 🩰",

    "❤️ Cómo me haces reír incluso cuando intento hacerme el serio 😂😂😂",

    "❤️ Tu obsesión con tu amiguisima Tiffany 💎",

    "❤️ Tu lado tierno que intentas disimular pero que se nota a kilómetros 🙈❤️",

    "❤️ Porque si fueras jugador del Toluca, serías mi fichaje favorito de todos los tiempos (incluyendo sobre Viñas eeee) 🔴",

    "❤️ Las conversaciones contigo que siempre terminan siendo mi parte favorita del día",

    "❤️ Que cuando veo conejos automáticamente pienso en ti 🐰",

    "❤️ Que te quiero aunque el primer día me hayas querido mandar con un don en el parque JAJAJA",

    "❤️ Que me haces sentir en casa incluso cuando estamos en lugares diferentes",

    "❤️ Que cada día encuentro una razón nueva para quererte un poquito más",

    "❤️ Y porque siendo sinceros... me encantas muchísimo, mi niño Holly 🐰",

    "❤️ Creo que ya son demasiadas razones... pero todavía me faltan como otras mil ocho mil 🤭"

];

function siguienteMensaje(){

    if(indice < mensajes.length){

        document
            .getElementById("mensaje")
            .innerHTML = mensajes[indice];

        indice++;
    }

    if(indice === mensajes.length){

        setTimeout(() => {

            document
                .getElementById("pantallaCorazon")
                .classList.add("oculto");

            document
                .getElementById("pantallaGaleria")
                .classList.remove("oculto");

        }, 1500);
    }
}


/* ========================= */
/* GALERÍA → TEST */
/* ========================= */

function siguienteEtapa(){

    document
        .getElementById("pantallaGaleria")
        .classList.add("oculto");

    document
        .getElementById("pantallaTest")
        .classList.remove("oculto");

    mostrarPregunta();
}


/* ========================= */
/* MINI TEST HOLLY */
/* ========================= */

let preguntaActual = 0;
let puntos = 0;

const preguntas = [

    {
        pregunta: "💙 ¿Qué es lo que más me gusta de ti?",
        opciones: [
            "😍 Tus ojitos preciosos",
            "🤭 Tus nalguitas jsjsjs",
            "💙 Todo me gusta de ti"
        ],
        correcta: 2
    },

    {
        pregunta: "🐰 ¿Qué animal me recuerda inmediatamente a ti?",
        opciones: [
            "🐰 Conejito",
            "🦁 León",
            "🙈 Changuito"
        ],
        correcta: 0
    },

    {
        pregunta: "🔴 ¿Cuál es el mejor equipo de futbol de la Liga MX?",
        opciones: [
            "🦅 América",
            "🔴 El poderosísimo Toluca",
            "🐆 Jaguares"
        ],
        correcta: 1
    }

];

function mostrarPregunta(){

    let p = preguntas[preguntaActual];

    document.getElementById("pregunta").innerHTML =
        `<h2>${p.pregunta}</h2>`;

    let html = "";

    p.opciones.forEach((opcion,index)=>{

        html += `
            <button onclick="responder(${index})">
                ${opcion}
            </button>
            <br><br>
        `;
    });

    document.getElementById("opciones").innerHTML = html;
}

function responder(indiceSeleccionado){

    if(indiceSeleccionado === preguntas[preguntaActual].correcta){

        puntos++;

    }else{

        alert("🤭 Incorrecto jajaja, pero te perdono porque eres tú 💙");
    }

    preguntaActual++;

    if(preguntaActual < preguntas.length){

        mostrarPregunta();

    }else{

        document.getElementById("pregunta").innerHTML = `
            <h1>🎉 Resultado final 🎉</h1>
            <h2>${puntos} de 3 respuestas correctas</h2>
            <p>
                💙 Premio desbloqueado:
                acceso a una carta muy especial 💙
            </p>
        `;

        document.getElementById("opciones").innerHTML = `
            <button onclick="abrirCarta()">
                💌 Abrir carta
            </button>
        `;
    }
}


/* ========================= */
/* CARTA */
/* ========================= */

function abrirCarta(){

    document
        .getElementById("pantallaTest")
        .classList.add("oculto");

    document
        .getElementById("pantallaCarta")
        .classList.remove("oculto");
}

function preguntaFinal(){

    document
        .getElementById("pantallaCarta")
        .classList.add("oculto");

    document
        .getElementById("pantallaFinal")
        .classList.remove("oculto");
}

function moverBoton(){

    const boton = document.getElementById("btnNo");

    const x = Math.random() * (window.innerWidth - 200);

    const y = Math.random() * (window.innerHeight - 100);

    boton.style.position = "absolute";
    boton.style.left = x + "px";
    boton.style.top = y + "px";
}

function acepto(){

    document.getElementById("pantallaFinal").innerHTML = `

        <h1>🥹❤️</h1>

        <h1>¡¡¡SIIIIIIIIIIII!!!</h1>

        <h2>
            Oficialmente ya somos novios ❤️🐰
        </h2>

        <p>
            Gracias por hacerme tan feliz, mi niño Holly.
        </p>

        <p>
            Te quiero muchísimo. ❤️
        </p>

    `;
}