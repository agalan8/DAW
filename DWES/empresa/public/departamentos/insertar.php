<?php session_start() ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insertar un nuevo departamento</title>
</head>
<body>
    <?php
    require '../../src/auxiliar.php';

    if (!Usuario::logueado_es_admin()) {
        $_SESSION['error'] = 'No tiene permisos suficientes.';
        volver_departamentos();
        return;
    }

    cabecera();

    $codigo = obtener_post('codigo');
    $denominacion = obtener_post('denominacion');
    $localidad = obtener_post('localidad');
    $fecha_alta = obtener_post('fecha_alta');
    $_csrf = obtener_post('_csrf');
    $pdo = conectar();

    if (isset($codigo, $denominacion, $localidad, $fecha_alta)) {
        if (!isset($_SESSION['_csrf']) || $_SESSION['_csrf'] != $_csrf) {
            $_SESSION['error'] = 'Petición incorrecta.';
            volver_departamentos();
            return;
        }
        $errores = [];
        comprobar_codigo($codigo, $errores, $pdo);
        comprobar_denominacion($denominacion, $errores, $pdo);
        comprobar_localidad($localidad, $errores);
        comprobar_fecha_alta($fecha_alta, $errores);

        if (!empty($errores)) {
            mostrar_errores($errores);
        } else {
            $departamento = new Departamento(
                compact('codigo', 'denominacion', 'localidad', 'fecha_alta')
            );
            $departamento->insertar();
            $_SESSION['exito'] = 'El departamento se ha insertado correctamente';
            volver_departamentos();
            return;
        }
    }

    if (!isset($_SESSION['_csrf'])) {
        $_SESSION['_csrf'] = bin2hex(random_bytes(32));
    }
    ?>
    <form action="" method="post">
        <input type="hidden" name="_csrf" value="<?= $_SESSION['_csrf'] ?>">
        <label>
            Código:
            <input type="text" name="codigo" value="<?= hh($codigo) ?>">
        </label>
        <br>
        <label>
            Denominación:
            <input type="text" name="denominacion" value="<?= hh($denominacion) ?>">
        </label>
        <br>
        <label>
            Localidad:
            <input type="text" name="localidad" value="<?= hh($localidad) ?>">
        </label>
        <br>
        <label>
            Fecha de alta:
            <input type="datetime-local" name="fecha_alta" value="<?= hh(fecha_formulario($fecha_alta, true)) ?>">
        </label>
        <br>
        <button type="submit">Insertar</button>
        <a href="departamentos.php">Cancelar</a>
    </form>
</body>
</html>
