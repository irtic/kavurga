<?php 

$accion = $_POST['accion'];

if($accion == 'inicio'){
    sleep(2);
    $resp = array('success' => 'true');
    echo json_encode($resp);
}

?>