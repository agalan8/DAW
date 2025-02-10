
// Array donde guardaré los vehículos
var vehiculos = [];
// Defino la clase vehículo
class Vehiculo{
    // Constructor con los atributos de un vehículo
    constructor(marca, modelo, color, anyo_fabricacion){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anyo_fabricacion = anyo_fabricacion;
    }
}

// Creo un evento en el botón añadir vehiculo que se dispara al hacer click en el
document.getElementById('anyadir_vehiculo').addEventListener('click', () => {
    // Recojo los valores de los inputs
    var marca = document.getElementById('marca').value;
    var modelo = document.getElementById('modelo').value;
    var color = document.getElementById('color').value;
    var anyo_fabricacion = document.getElementById('anyo_fabricacion').value;
    // Creo un nuevo vehículo y lo añado al array de vehículos
    vehiculos.push(new Vehiculo(marca, modelo, color, anyo_fabricacion));
    // Si ya se han añadido 5 vehículos
    if(vehiculos.length == 5){
        // Desactivo el botón para añadir vehículos
        document.getElementById('anyadir_vehiculo').disabled = true;
        // Llamo a la función que imprime la tabla
        imprimirTabla();
    }
})

function imprimirTabla(){
    // Creo el elemento table
    var table = document.createElement('table');
    // Creo un thead en la tabal
    var thead = table.createTHead();
    // Creo una nueva fila en el thead
    var fila = thead.insertRow();
    // Por cada columna añado una celda en la fila
    fila.insertCell().textContent = 'Marca';
    fila.insertCell().textContent = 'Modelo';
    fila.insertCell().textContent = 'Color';
    fila.insertCell().textContent = 'Año de fabricación';
    // Creo un tbody en la tabla
    var tbody = table.createTBody();
    // Pro cada vehículo en el array vehículos hago lo siguiente:
    vehiculos.forEach(function(vehiculo){
        // Añado una fila al tbody
        var fila = tbody.insertRow();
        // Añado una celda con el texto correspondiente por cada dato del vehículo
        fila.insertCell().textContent = vehiculo.marca;
        fila.insertCell().textContent = vehiculo.modelo;
        fila.insertCell().textContent = vehiculo.color;
        fila.insertCell().textContent = vehiculo.anyo_fabricacion;
    })
    // Añado la tabla al body del doumento
    document.body.appendChild(table);
}
