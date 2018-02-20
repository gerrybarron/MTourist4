<?php
// header("Access-Control-Allow-Origin:*");
include "connection.php";

$email = $_POST["owner_email"];
$username = $_POST["owner_username"];
$password = $_POST["owner_password"];
$name = $_POST["owner_name"];
$contact = $_POST["owner_contact"];
$bName = $_POST["owner_bName"];
$bAddress = $_POST["owner_bAddress"];
$position = "Owner";
$status = "unconfirmed";

$login = $dbh->prepare("SELECT * FROM tbl_owner WHERE fld_email = :email");
$login->bindParam(":email", $email);
$login->execute();
$data = $login->fetch(PDO::FETCH_ASSOC);

// echo json_encode($data);
$sth = $dbh->prepare("SELECT fld_id FROM tbl_owner  ORDER BY fld_id DESC LIMIT 1");
$sth->execute();
$count = $sth->fetch(PDO::FETCH_ASSOC);
$ownerId = date("Y").($count["fld_id"]+1);

// echo $ownerId;

if(empty($email)){
    echo "Please enter your email address";
}
else if(empty($password)){
    echo "Please enter your password";
}
else if(empty($password) and empty($email)){
    echo "Please enter your email and password";
}
else{
    if($email == $data["fld_email"]) {
        // echo "Email address already registered";
        echo "error-code-4";
    }
    else{
        $home = $dbh->prepare("INSERT INTO tbl_owner (fld_ownerId, fld_username, fld_email, fld_password, fld_fName, fld_cNum, fld_bName, fld_bAddress, fld_position, fld_status) VALUES (:fld_ownerId, :fld_username, :fld_email, :fld_password, :fld_fName, :fld_cNum, :fld_bName, :fld_bAddress, :fld_position, :fld_status)");
        $home->bindParam(":fld_ownerId", $ownerId);
        $home->bindParam(":fld_username", $username);
        $home->bindParam(":fld_email", $email);
        $home->bindParam(":fld_password", $password);
        $home->bindParam(":fld_fName", $name);
        $home->bindParam(":fld_cNum", $contact);
        $home->bindParam(":fld_bName", $bName);
        $home->bindParam(":fld_bAddress", $bAddress);
        $home->bindParam(":fld_position", $position);
        $home->bindParam(":fld_status", $status);
        $home->execute();
        echo "Account successfully registered";
    }
}
?>