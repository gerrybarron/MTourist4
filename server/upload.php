<?php
include("connection.php");

if(isset($_POST["imgdata"])) {
    $imgData = $_POST["imgdata"];
    $userId = $_POST["userId"];
    
    $upload = $dbh->prepare("UPDATE tbl_users SET fld_pic = :fld_pic WHERE fld_userId = :fld_userId");
    $upload->bindParam(":fld_pic", $imgData);
    $upload->bindParam(":fld_userId", $userId);
    $upload->execute(); 
}

if(isset($_POST["imgdata2"])) {
    $imgData = $_POST["imgdata2"];
    $img2 = $_POST["img2"];
    $img3 = $_POST["img3"];
    $img4 = $_POST["img4"];
    $img5 = $_POST["img5"];
    $placeId = $_POST["placeId"];
    
    $upload = $dbh->prepare("UPDATE tbl_place SET fld_img1 = :fld_img1, fld_img2 = :fld_img2, fld_img3 = :fld_img3,fld_img4 = :fld_img4, fld_img5 = :fld_img5 WHERE fld_placeId = :fld_placeId");
    $upload->bindParam(":fld_img1", $imgData);
    $upload->bindParam(":fld_img2", $img2);
    $upload->bindParam(":fld_img3", $img3);
    $upload->bindParam(":fld_img4", $img4);
    $upload->bindParam(":fld_img5", $img5);
    $upload->bindParam(":fld_placeId", $placeId);
    $upload->execute(); 
}

if(isset($_POST["imgdata3"])) {
    $imgData = $_POST["imgdata3"];
    $userId = $_POST["userId"];
    $placeName = $_POST["placeName"];
    $placeMun = $_POST["placeMun"];
    $post = $_POST["post"];
    
    $upload = $dbh->prepare("INSERT INTO tbl_post (fld_post, fld_desId, fld_placeName, fld_userId, fld_image) VALUES (:fld_post, :fld_desId, :fld_placeName, :fld_userId, :fld_image)");
    $upload->bindParam(":fld_image", $imgData);
    $upload->bindParam(":fld_userId", $userId);
    $upload->bindParam(":fld_placeName", $placeName);
    $upload->bindParam(":fld_desId", $placeMun);
    $upload->bindParam(":fld_post", $post);
    $upload->execute(); 
}
?>