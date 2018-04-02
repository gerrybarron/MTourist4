<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');

include "connection.php";
// $id = $_POST["uid"];
$pId = $_POST["pId"];
$uId = $_POST["uId"];
$pReview = $_POST["pReview"];
$pRating = $_POST["pRating"];
$status = "confirmed";
$status2 = "unconfirmed";

$sth = $dbh->prepare("SELECT fld_id FROM tbl_reviews  ORDER BY fld_id DESC LIMIT 1");
$sth->execute();
$count = $sth->fetch(PDO::FETCH_ASSOC);
$reviewId = "R".date("Y").($count["fld_id"]+1);

$user = $dbh->prepare("SELECT * FROM tbl_users WHERE fld_userId = :fld_userId");
$user->bindParam(":fld_userId", $uId);
$user->execute();
$data = $user->fetch(PDO::FETCH_ASSOC); 

$userName = $data["fld_username"];
$userEmail = $data["fld_email"];

$review = $dbh->prepare("INSERT INTO tbl_reviews (fld_reviewId, fld_placeId, fld_userId, fld_review, fld_rating, fld_username, fld_email, fld_status, fld_status2) VALUES (:fld_reviewId, :fld_placeId, :fld_userId, :fld_review, :fld_rating, :fld_username, :fld_email, :fld_status, :fld_status2)");
$review->bindParam(":fld_reviewId", $reviewId);
$review->bindParam(":fld_placeId", $pId);
$review->bindParam(":fld_userId", $uId);
$review->bindParam(":fld_review", $pReview);
$review->bindParam(":fld_rating", $pRating);
$review->bindParam(":fld_username", $userName);
$review->bindParam(":fld_email", $userEmail);
$review->bindParam(":fld_status", $status);
$review->bindParam(":fld_status2", $status2);
$review->execute();
echo "Place successfully saved";
?>