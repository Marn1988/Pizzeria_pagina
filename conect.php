<?php
$conexion = mysqli_connect("localhost","root","","bd_formulario") or die("Error al conectar a la base de datos");
if(!$conexion){
echo "Error al conectar a la base de datos";
}
else{
   echo "conexion exitosa con base de datos";
}
