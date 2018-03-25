<?php
header("Access-Control-Allow-Origin:*");
include "connection.php";

if(isset($_GET["uID"])){
	$id = $_GET["uID"];
	$home = $dbh->prepare("SELECT * FROM tbl_users WHERE fld_userId = :fld_userId");
	$home->bindParam(":fld_userId", $id);
	$home->execute();
	$data = $home->fetch(PDO::FETCH_ASSOC); 
	echo json_encode($data);
}

if(isset($_GET["ownerId"])){
	$id = $_GET["ownerId"];
	$home = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_owner = :fld_owner");
	$home->bindParam(":fld_owner", $id);
	$home->execute();
	$data = $home->fetchAll(PDO::FETCH_ASSOC); 
	echo json_encode($data);
}

if(isset($_GET["dest"])){
	$dest = $dbh->prepare("SELECT * FROM tbl_destinations");
	$dest->execute();
	$data = $dest->fetchAll(PDO::FETCH_ASSOC); 
	echo json_encode($data);
}

if(isset($_GET["destName"])){
	$id = $_GET["destName"];
	$status = "confirmed";
	$dest = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_desId = :fld_desId AND fld_status = :fld_status");
	$dest->bindParam(":fld_desId", $id);
	$dest->bindParam(":fld_status", $status);
	$dest->execute();
	$data = $dest->fetchAll(PDO::FETCH_ASSOC); 
	echo json_encode($data);
}

if(isset($_GET["destName2"])){
	$id = $_GET["destName2"];
	$name = $_GET["name"];
	$status = "confirmed";
	$dest = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_desId = :fld_desId AND fld_status = :fld_status AND fld_name LIKE :fld_name");
	$dest->bindParam(":fld_desId", $id);
	$dest->bindValue(":fld_name", '%'.$name.'%');
	$dest->bindParam(":fld_status", $status);
	$dest->execute();
	$data = $dest->fetchAll(PDO::FETCH_ASSOC); 
	echo json_encode($data);
}

if(isset($_GET["destName3"])){
	$id = $_GET["destName3"];
	$category = $_GET["category"];
	$status = "confirmed";
	$dest = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_desId = :fld_desId AND fld_status = :fld_status AND fld_category = :fld_category");
	$dest->bindParam(":fld_desId", $id);
	$dest->bindParam(":fld_category", $category);
	$dest->bindParam(":fld_status", $status);
	$dest->execute();
	$data = $dest->fetchAll(PDO::FETCH_ASSOC); 
	echo json_encode($data);
}

if(isset($_GET["destName4"])){
	$id = $_GET["destName4"];
	$price = $_GET["name"];
	$status = "confirmed";
	$dest = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_desId = :fld_desId AND fld_status = :fld_status AND fld_startPrice >= :fld_startPrice");
	$dest->bindParam(":fld_desId", $id);
	$dest->bindValue(":fld_startPrice", $price);
	$dest->bindParam(":fld_status", $status);
	$dest->execute();
	$data = $dest->fetchAll(PDO::FETCH_ASSOC); 
	echo json_encode($data);
}

if(isset($_GET["placeId"])){
	$id = $_GET["placeId"];
	$dest = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_placeId = :fld_placeId");
	$dest->bindParam(":fld_placeId", $id);
	$dest->execute();
	$data = $dest->fetch(PDO::FETCH_ASSOC); 
	echo json_encode($data);
}

if(isset($_GET["placeId2"])){
	$id = $_GET["placeId2"];
	$status = "confirmed";
	$review = $dbh->prepare("SELECT * FROM tbl_reviews WHERE fld_placeId = :fld_placeId AND fld_status = :fld_status");
	$review->bindParam(":fld_placeId", $id);
	$review->bindParam(":fld_status", $status);
	$review->execute();
	$data = $review->fetchAll(PDO::FETCH_ASSOC); 
	echo json_encode($data);
}

if(isset($_GET["placeId3"])){
	$id = $_GET["placeId3"];
	$review = $dbh->prepare("SELECT * FROM tbl_reviews WHERE fld_placeId = :fld_placeId");
	$review->bindParam(":fld_placeId", $id);
	$review->execute();
	$data = $review->fetchAll(PDO::FETCH_ASSOC); 
	echo json_encode($data);
}

if(isset($_GET["placeId4"])){
	$id = $_GET["placeId4"];
	$review = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_placeId = :fld_placeId");
	$review->bindParam(":fld_placeId", $id);
	$review->execute();
	$data = $review->fetch(PDO::FETCH_ASSOC); 
	echo json_encode($data);
}

if(isset($_GET["placeId5"])){
	$id = $_GET["placeId5"];
	$review = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_placeId = :fld_placeId");
	$review->bindParam(":fld_placeId", $id);
	$review->execute();
	$data = $review->fetch(PDO::FETCH_ASSOC); 
	echo json_encode($data, JSON_NUMERIC_CHECK);
}

if(isset($_GET["placeRating"])){
	$id = $_GET["placeRating"];
	$review = $dbh->prepare("SELECT * FROM tbl_reviews WHERE fld_placeId = :fld_placeId");
	$review->bindParam(":fld_placeId", $id);
	$review->execute();
	$data = $review->fetchAll(PDO::FETCH_ASSOC); 
	echo json_encode($data, JSON_NUMERIC_CHECK);
}

if(isset($_GET["postUserId"])){
	$id = $_GET["postUserId"];
	$post = $dbh->prepare("SELECT * FROM tbl_post WHERE fld_userId = :fld_userId");
	$post->bindParam(":fld_userId", $id);
	$post->execute();
	$data = $post->fetchAll(PDO::FETCH_ASSOC); 
	echo json_encode($data, JSON_NUMERIC_CHECK);
}

// Get all post
if(isset($_GET["post"])){
	$post = $dbh->prepare("SELECT tbl_users.fld_fName, tbl_users.fld_lName, tbl_post.fld_placeName, tbl_post.fld_desId,tbl_post.fld_post, tbl_post.fld_image, tbl_post.fld_date FROM tbl_post INNER JOIN tbl_users ON tbl_post.fld_userId=tbl_users.fld_userId");
	$post->execute();
	$data = $post->fetchAll(PDO::FETCH_ASSOC); 
	echo json_encode($data, JSON_NUMERIC_CHECK);
}
?>