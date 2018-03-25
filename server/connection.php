<?php
header('Access-Control-Allow-Origin: *');
$user="root";
$pass="";

$dbh=new PDO('mysql:host=localhost;dbname=db_ztour2', $user, $pass);
?>