<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
include "connection.php";
$username = $_POST["username2"];
$password = $_POST["password2"];
$level = "general";
$status = "confirmed";

$login = $dbh->prepare("SELECT * FROM tbl_users WHERE fld_email = :user AND fld_password = :pass");
$login->bindParam(":user", $username);
$login->bindParam(":pass", $password);
$login->execute();
$data = $login->fetch(PDO::FETCH_ASSOC);

$sth = $dbh->prepare("SELECT fld_id FROM tbl_users  ORDER BY fld_id DESC LIMIT 1");
$sth->execute();
$count = $sth->fetch(PDO::FETCH_ASSOC);
$userid = date("Y").($count["fld_id"]+1);

if(empty($username)){
    echo "Please enter your email address";
}
else if(empty($password)){
    echo "Please enter your password";
}
else if(empty($password) and empty($username)){
    echo "Please enter your email and password";
}
else{
    if($username == $data["fld_email"]) {
        // echo "Email address already registered";
        echo "error-code-4";
    }
    else{
        $home = $dbh->prepare("INSERT INTO tbl_users (fld_userId, fld_email, fld_password, fld_level, fld_confirm) VALUES (:fld_userId, :fld_email, :fld_password, :fld_level, :fld_status)");
        $home->bindParam(":fld_userId", $userid);
        $home->bindParam(":fld_email", $username);
        $home->bindParam(":fld_password", $password);
        $home->bindParam(":fld_level", $level);
        $home->bindParam(":fld_status", $status);
        $home->execute();
        echo "Account successfully registered";
    }
    
}
?>