<?php
// header("Access-Control-Allow-Origin:*");
include "connection.php";

if(isset($_POST["reviewId"])) {
    $pid = $_POST["reviewId"];
    $status = "confirmed";
    
    $review = $dbh->prepare("UPDATE tbl_reviews SET fld_status = :fld_status WHERE fld_reviewId = :fld_reviewId");
    $review->bindParam(":fld_status", $status);
    $review->bindParam(":fld_reviewId", $pid);
    $review->execute(); 
    echo "Saved";
}
?>