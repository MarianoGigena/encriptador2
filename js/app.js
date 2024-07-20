document.addEventListener('DOMContentLoaded', () => {
    const boton1 = document.getElementById('boton1');
    const boton2 = document.getElementById('boton2');
    const boton3 = document.getElementById('boton3');



    boton1.addEventListener('click', () => {
        var textarea = document.getElementById("texto-a-transformar").value;
        console.log(textarea)
        var validacion = esTextoMinusculasSinAcento(textarea);
        if (validacion) {
            var textoEncriptado = textarea
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
            document.getElementById("texto-a-transformar").textContent = textoEncriptado;
            console.log(textoEncriptado);


            var elemento = document.getElementById('caja-contenido');
            if (elemento) {
                elemento.remove(); // Elimina el div con id "miElemento"
            }
            document.getElementById("texto-salida1").textContent = textoEncriptado
            var elemento2 = document.getElementById('texto-salida1');
            elemento2.classList.add('texto-convertido-estilo'); // Agrega la clase
            crearBoton();
            copiar();
            //limpiar
            var textarea = document.getElementById('texto-a-transformar');
            textarea.value = textarea.getAttribute('placeholder'); // Limpia el valor del textarea
        } else {
            alert("El texto no es valido");
        }



    });

    boton2.addEventListener('click', () => {
        var textarea = document.getElementById("texto-a-transformar").value;
        console.log(textarea)
        var validacion = esTextoMinusculasSinAcento(textarea);
        if (validacion) {
            var textoEncriptado = textarea
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
            document.getElementById("texto-a-transformar").textContent = textoEncriptado;
            console.log(textoEncriptado);

            var elemento = document.getElementById('caja-contenido');

            if (elemento) {
                elemento.remove(); // Elimina el div con id "miElemento"
            }
            document.getElementById("texto-salida1").textContent = textoEncriptado
            var elemento2 = document.getElementById('texto-salida1');
            elemento2.classList.add('texto-convertido-estilo'); // Agrega la clase
            crearBoton();
            copiar();
        } else {
            alert("El texto no es valido");
        }

        //limpiar
        textarea = document.getElementById('texto-a-transformar');
        textarea.value = textarea.getAttribute('placeholder'); // Limpia el valor del textarea
    }
    );

});

function copiar() {

    boton3.addEventListener('click', () => {
        // Selecciona el área de texto
        const textarea = document.getElementById('texto-salida1');
        const texto = textarea.value;
        navigator.clipboard.writeText(texto).then(function () {
            console.log('Texto copiado al portapapeles');
            mostrarDiv()
            var audio = new Audio('./audio/mario-bros-1-up.mp3');
            audio.play();
        }).catch(function (err) {
            console.error('No se pudo copiar el texto: ', err);
        });


    });
}
function mostrarDiv() {
    var div = document.getElementById('miDiv');
    div.style.display = 'block';
    setTimeout(function () {
        div.style.display = 'none';
    }, 3000);
}
function crearBoton() {
    var elemento3 = document.getElementById('boton3');
    if (elemento3) {
        elemento3.remove();
    }
    // Crear el botón
    const boton3 = document.createElement('button');
    boton3.textContent = 'Copiar'; // Texto del botón

    // Opcional: Configurar atributos del botón
    boton3.id = 'boton3';
    boton3.className = 'botonCopiar';


    // Seleccionar el contenedor y agregar el botón
    const contenedor = document.getElementById('boton-copiar');
    contenedor.appendChild(boton3);
}
function esTextoMinusculasSinAcento(textarea) {
    // Expresión regular para verificar si el texto contiene solo letras minúsculas y sin acento
    var regex = /^[a-z\s]+$/;
    return regex.test(textarea);
}