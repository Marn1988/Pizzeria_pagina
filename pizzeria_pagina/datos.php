<?php 

// recibe datos de formulario
include 'conect.php'; // incluye php de conexion a bd
$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$calles = $_POST["calles"];
$numero_puerta = $_POST["numero_puerta"];
$ciudad = $_POST["ciudad"];
// envia datos a la base de datos

$insert= "INSERT INTO formulario (nombre,telefono,calles,numero_puerta,ciudad) VALUES('$nombre','$telefono','$calles','$numero_puerta','$ciudad')";

//ejecutar consulta

$result= mysqli_query($conexion,$insert);

if(!$result){
    echo "error en el registro";
}
else{
    echo "lísto tu registro esta completo";
}
//cerrar conexion
mysqli_close($conexion);