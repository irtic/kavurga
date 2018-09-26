<?php 
require '../../../lib/conexion.php';


$accion = $_POST['accion'];

if($accion == 'inicio'){
    sleep(2);
    $resp = array('success' => 'true');
    echo json_encode($resp);
}
if($accion == 'inicio_admin'){
    $email = $_POST['email'];
    $contrasena = $_POST['contrasena'];
}
?>