
// Función para mostrar el DOM de la página
function mostrarDOM() {
    // Llamo a la función obtenerDOM pasando como parámetro el elemento documento
    const domString = obtenerDOM(document.documentElement);
    document.getElementById('domRepresentado').textContent = domString;
}

// Función recursiva para convertir el DOM en una cadena de texto
function obtenerDOM(element) {
// Empezo la cadena que representará el DOM
// Obtengo la etiqueta de apertura con el nombre de la etiqueta
let representacion = `<${element.tagName.toLowerCase()}`;

// Obtengo los atributos en caso de que la etiqueta los tenga
Array.from(element.attributes).forEach(attr => {
    representacion += ` ${attr.name}="${attr.value}"`;
});

// Cierro la etiqueta de apertura
representacion += '>';

// Por cada elemento hijo hado lo siguiente
Array.from(element.childNodes).forEach(child => {
    // Compruebo si el elemento hijo es un node text
    if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
    // Si lo es añado el contenido del nodo
    representacion += child.textContent.trim();
    // Si no lo es:
    } else if (child.nodeType === Node.ELEMENT_NODE) {
    // Llamo a la función de manera recursiva para que imprima el elemento hijo
    representacion += obtenerDOM(child);
    }
});
// Creo la etiqueta de cierre usando el nombre del elemento
representacion += `</${element.tagName.toLowerCase()}>`;
// Añado un salto de linea cada vez que se cierra una etiqueta para que se lea mejor
representacion += '\n';
return representacion;
}

// Añado un evento en el boton para que se dispare al hacer click en el
document.getElementById('mostrarDOM').addEventListener('click', mostrarDOM);
