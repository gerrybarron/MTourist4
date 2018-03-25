<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

include "connection.php";
// $sql = "SELECT * FROM tbl_test";

if(isset($_POST["userId"])){
    $level = "owner";
    $status = "unconfirmed";
    $userId = $_POST["userId"];
    
    $info = $dbh->prepare("UPDATE tbl_users SET fld_level = :fld_level, fld_confirm = :fld_confirm WHERE fld_userId = :fld_userId");
    $info->bindParam(":fld_level", $level);
    $info->bindParam(":fld_confirm", $status);
    $info->bindParam(":fld_userId", $userId);
    $info->execute(); 
}

if(isset($_POST["userId2"])){
    $userId = $_POST["userId2"];
    $fName = $_POST["fName"];
    $lName = $_POST["lName"];
    $cNum = $_POST["cNum"];
    $gender = $_POST["gender"];
    $address = $_POST["address"];
    $uBio = $_POST["uBio"];
    
    $info = $dbh->prepare("UPDATE tbl_users SET fld_fName = :fld_fName, fld_lName = :fld_lName, fld_cNum = :fld_cNum, fld_gender = :fld_gender, fld_address = :fld_address, fld_bio = :fld_bio WHERE fld_userId = :fld_userId");
    $info->bindParam(":fld_userId", $userId);
    $info->bindParam(":fld_fName", $fName);
    $info->bindParam(":fld_lName", $lName);
    $info->bindParam(":fld_cNum", $cNum);
    $info->bindParam(":fld_gender", $gender);
    $info->bindParam(":fld_address", $address);
    $info->bindParam(":fld_bio", $uBio);
    $info->execute(); 
}

if(isset($_POST["userId3"])){
    //$level = "owner";
    $status = "confirmed";
    $ownerId = $_POST["userId3"];
    
    $info = $dbh->prepare("UPDATE tbl_owner SET fld_status = :fld_status WHERE fld_ownerId = :fld_ownerId");
    $info->bindParam(":fld_status", $status);
    $info->bindParam(":fld_ownerId", $ownerId);
    $info->execute(); 
}
?>