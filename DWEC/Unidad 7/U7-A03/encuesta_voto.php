<?php
    // Compruebo si el parámetro equipo existe y lo guardo en una variable
    $voto = isset($_GET['equipo']) ? $_GET['equipo'] : '';
    // Si la variable cadena está vacia devuelvo una cadena vacía y detengo el script
    if (empty($voto)) {
        echo "";
        exit;
    }
    // Obtengo el archivo mediante su dirección
    $archivo = "resultados.txt";
    // Abro el archivo en modo lectura + escritura
    $archivoAbierto = fopen($archivo, "r+");
    // Si el arvhivo esta abierto
    if($archivoAbierto){
        // Indico el archivo que se debe leer y cuantos bytes (tamaño total del archivo)
        $contenido = fread($archivoAbierto, filesize($archivo));
        // Creo un array con los valores de la cadena del archivo separados por ||
        $valores = explode('||', $contenido);
        // Guardo cada valor (votos) en la variable correspondiente
        $votosRealMadrid = intval($valores[0]);
        $votosBarcelona = intval($valores[1]);
        $votosAtlMadrid = intval($valores[2]);
        $votosSevilla = intval($valores[3]);
        // Compruebo el valor de la variable voto y sumo el voto en la varable correspondiente
        if($voto == "real-madrid"){
            $votosRealMadrid++;
        } else if($voto == "barcelona"){
            $votosBarcelona++;
        } else if($voto == "atl-madrid"){
            $votosAtlMadrid++;
        } else if($voto == "sevilla"){
            $votosSevilla++;
        } else{
            echo "";
            exit;
        }
        // Creo la cadena para reescribir el archivo resultados.txt
        $contenidoNuevo = $votosRealMadrid . "||" . $votosBarcelona . "||" . $votosAtlMadrid . "||" . $votosSevilla;
        // Me sitúo en el principo del archivo
        fseek($archivoAbierto, 0);
        // Esribo en el archivo el nuevo contenido
        fwrite($archivoAbierto, $contenidoNuevo);
        // Cierro el archivo
        fclose($archivoAbierto);
        // Obtengo el total de votos
        $total = $votosRealMadrid + $votosBarcelona + $votosAtlMadrid + $votosSevilla;
        // Imprimo el porcentaje de votos de cada equipo
        echo "<div>Real Madrid: " . round((($votosRealMadrid / $total) * 100),2) . "%</div>";
        echo "<div>Barcelona: " . round((($votosBarcelona / $total) * 100),2) . "%</div>";
        echo "<div>Atlético de Madrid: " . round((($votosAtlMadrid / $total) * 100),2) . "%</div>";
        echo "<div>Sevilla: " . round((($votosSevilla / $total) * 100),2) . "%</div>";
    }

?>
