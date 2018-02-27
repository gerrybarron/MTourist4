<?php
//error_reporting( ~E_NOTICE );
header("Access-Control-Allow-Origin:*");
include "connection.php";

if(isset($_POST["login"])) {
	$username = $_POST["username"];
	$password = $_POST["password"];

	$login = $dbh->prepare("SELECT * FROM tbl_users WHERE fld_email = :user AND fld_password = :pass");
	$login->bindParam(":user", $username);
	$login->bindParam(":pass", $password);
	$login->execute();
	$data = $login->fetch(PDO::FETCH_ASSOC);
	if($username == $data["fld_email"] && $password == $data["fld_password"]) {
		//if($data["fld_perm"] == 1){
			// header('Location: ../dashboard.html');
		//}
		echo $data["fld_userId"];
	}
	else if(empty($username)){
		echo "Please enter a valid email address";
	}
	else if(empty($username) and empty($password)){
		echo "Please enter your email and password"; 
	}
	else if(empty($password)){
		echo "Please enter your password";
	}
	else{
		echo "Email or password is incorrect";
	}
}

if(isset($_POST["owner-login"])) {
	$username = $_POST["owner_email2"];
	$password = $_POST["owner_password3"];
	$status = "confirmed";

	$login = $dbh->prepare("SELECT * FROM tbl_owner WHERE fld_email = :user AND fld_password = :pass");
	$login->bindParam(":user", $username);
	$login->bindParam(":pass", $password);
	$login->execute();
	$data = $login->fetch(PDO::FETCH_ASSOC);
	if($username == $data["fld_email"] && $password == $data["fld_password"] && $status == $data["fld_status"]) {
		//if($data["fld_perm"] == 1){
			// header('Location: ../dashboard.html');
		//}
		echo $data["fld_ownerId"];
	}
	elseif($data["fld_status"] == "unconfirmed"){
		// Owner still not confirmed
		echo "error-code-2";
	}
	elseif($data["fld_status"] == "deactivated"){
		// Owner account is deactivated
		echo "error-code-3";
	}
	else if(empty($username)){
		echo "Please enter a valid email address";
	}
	else if(empty($username) and empty($password)){
		echo "Please enter your email and password"; 
	}
	else if(empty($password)){
		echo "Please enter your password";
	}
	else{
		// echo "Email or password is incorrect";
		echo "error-code-1";
	}
}
?>