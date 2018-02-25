<?php
// header("Access-Control-Allow-Origin:*");
include "connection.php";

if(isset($_POST["owner_email"])){
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
    // $sth = $dbh->prepare("SELECT fld_id FROM tbl_owner  ORDER BY fld_id DESC LIMIT 1");
    $sth = $dbh->prepare("SELECT MAX(fld_id) FROM tbl_owner");
    $sth->execute();
    $count = $sth->fetch(PDO::FETCH_ASSOC);
    $ownerId = date("Y").'-'.($count["fld_id"]+1);
    
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
}

if(isset($_POST["addUser"])){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $position = $_POST["position"];
    $password = $_POST["password"];
    $parentId = $_POST["parentId"];
    $status = "confirmed";
    
    $compare = $dbh->prepare("SELECT * FROM tbl_owner WHERE fld_email = :email");
    $compare->bindParam(":email", $email);
    $compare->execute();
    $data = $compare->fetch(PDO::FETCH_ASSOC);
    
    $getInfo = $dbh->prepare("SELECT * FROM tbl_owner WHERE fld_ownerId = :fld_ownerId");
    $getInfo->bindParam(":fld_ownerId", $parentId);
    $getInfo->execute();
    $data2 = $getInfo->fetch(PDO::FETCH_ASSOC);
    // echo $data2["fld_cNum"];
    $sth = $dbh->prepare("SELECT MAX(fld_id) FROM tbl_owner");
    $sth->execute();
    $count = $sth->fetch(PDO::FETCH_ASSOC);
    // echo $count['MAX(fld_id)'];
    $ownerId = date("Y").'-'.($count["MAX(fld_id)"]+1);
    
    if($email == $data["fld_email"]) {
        // echo "Email address already registered";
        echo "error-code-4";
    }
    else{
        $ownerInfo = $dbh->prepare("INSERT INTO tbl_owner (fld_ownerId, fld_username, fld_email, fld_password, fld_fName, fld_cNum, fld_bName, fld_bAddress, fld_position, fld_parentId, fld_status) VALUES (:fld_ownerId, :fld_username, :fld_email, :fld_password, :fld_fName, :fld_cNum, :fld_bName, :fld_bAddress, :fld_position, :fld_parentId, :fld_status)");
        $ownerInfo->bindParam(":fld_ownerId", $ownerId);
        $ownerInfo->bindParam(":fld_username", $name);
        $ownerInfo->bindParam(":fld_email", $email);
        $ownerInfo->bindParam(":fld_password", $password);
        $ownerInfo->bindParam(":fld_fName", $name);
        $ownerInfo->bindParam(":fld_cNum", $data2["fld_cNum"]);
        $ownerInfo->bindParam(":fld_bName", $data2["fld_bName"]);
        $ownerInfo->bindParam(":fld_bAddress", $data2["fld_bAddress"]);
        $ownerInfo->bindParam(":fld_position", $position);
        $ownerInfo->bindParam(":fld_parentId", $parentId);
        $ownerInfo->bindParam(":fld_status", $status);
        $ownerInfo->execute();
        echo "Account successfully registered";
    }
}

// UPDATE INFO OF USER BY OWNER
if(isset($_POST["editUser"])){
    $userId = $_POST["userId"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $position = $_POST["position"];
    $password = $_POST["password"];
    $status = "confirmed";
    
    // $compare = $dbh->prepare("SELECT * FROM tbl_owner WHERE fld_email = :email");
    // $compare->bindParam(":email", $email);
    // $compare->execute();
    // $data = $compare->fetch(PDO::FETCH_ASSOC);
    
    // if($email == $data["fld_email"]) {
    //     // echo "Email address already registered";
    //     echo "error-code-4";
    // }
    // else{
        $info = $dbh->prepare("UPDATE tbl_owner SET fld_fName = :fld_fName, fld_email = :fld_email, fld_position = :fld_position, fld_password = :fld_password WHERE fld_id = :fld_id");
        $info->bindParam(":fld_id", $userId);
        $info->bindParam(":fld_fName", $name);
        $info->bindParam(":fld_email", $email);
        $info->bindParam(":fld_position", $position);
        $info->bindParam(":fld_password", $password);
        $info->execute(); 
        
    // }
}

// DELETE USER BY OWNER
if(isset($_POST["deleteUser"])){
    $userId = $_POST["userId"];
    $remove = $dbh->prepare("DELETE FROM tbl_owner WHERE fld_id = :fld_id");
    $remove->bindParam(":fld_id", $userId);
    $remove->execute(); 
    echo "User successfully removed";
}
?>