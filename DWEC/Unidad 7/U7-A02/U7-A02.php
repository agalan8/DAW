<?php
// Creo un array de ciudades
$ciudades = array("Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Malaga", "Murcia", "Palma", "Las Palmas", "Bilbao", "Alicante", "Córdoba", "Valladolid", "Vigo", "Gijón", "Hospitalet");
// Verifico si el parámetro cadena existe, si no es igual a una cadena vacía
$cadena = isset($_GET['cadena']) ? $_GET['cadena'] : '';
// Si la variable cadena está vacia devuelvo una cadena vacía y detengo el script
if (empty($cadena)) {
    echo "";
    exit;
}
// Creo un array vacío donde se guardarán las sugerencias
$sugerencias = array();
// Por cada ciudad en el array ciudades
foreach ($ciudades as $ciudad) {
    // Si la cadena se ecuentra en el nombre de alguna ciudad
    if (stristr($ciudad, $cadena) !== false) {
        // Añado la ciudad al array sugerencias
        $sugerencias[] = $ciudad;
    }
}
// Si el array sugerencias no esta vacío
if (count($sugerencias) > 0) {
    // Por cada sugerencia en el array sugerencias
    foreach ($sugerencias as $sugerencia) {
        // Devuelvo un div con la sugerencia
        echo "<div>" . $sugerencia . "</div>";
    }
// En caso contrario
} else {
    // Indico que no hay ninguna sugerencia
    echo "No se encontraron resultados";
}
?>
