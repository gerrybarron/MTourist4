<?php
// header("Access-Control-Allow-Origin:*");
include "connection.php";
// $id = $_POST["uid"];
$pName = $_POST["pName"];
$pCategory = $_POST["pCategory"];
$pMun = $_POST["pMun"];
$pPrice = $_POST["pPrice"];
$pAdd = $_POST["pAdd"];
$pLat = $_POST["pLat"];
$pLng = $_POST["pLng"];
$pCnum = $_POST["pCnum"];
$pWeb = $_POST["pWeb"];
$pShort = $_POST["pShort"];
$pLong = $_POST["pLong"];
$pPax = $_POST["pPax"];
$userId = $_POST["userId"];
$status = "unconfirmed";

$sth = $dbh->prepare("SELECT fld_id FROM tbl_place  ORDER BY fld_id DESC LIMIT 1");
$sth->execute();
$count = $sth->fetch(PDO::FETCH_ASSOC);
$placeId = "z".date("Y").($count["fld_id"]+1);

$home = $dbh->prepare("INSERT INTO tbl_place (fld_placeId, fld_name, fld_category, fld_desId, fld_startPrice, fld_address, fld_lat, fld_lng, fld_contact, fld_website, fld_shortDesc, fld_longDesc, fld_pax, fld_owner, fld_status) VALUES (:fld_placeId, :fld_name, :fld_category, :fld_desId, :fld_startPrice, :fld_address, :fld_lat, :fld_lng, :fld_contact, :fld_website, :fld_shortDesc, :fld_longDesc, :fld_pax, :fld_owner, :fld_status)");
$home->bindParam(":fld_placeId", $placeId);
$home->bindParam(":fld_name", $pName);
$home->bindParam(":fld_category", $pCategory);
$home->bindParam(":fld_desId", $pMun);
$home->bindParam(":fld_startPrice", $pPrice);
$home->bindParam(":fld_address", $pAdd);
$home->bindParam(":fld_lat", $pLat);
$home->bindParam(":fld_lng", $pLng);
$home->bindParam(":fld_contact", $pCnum);
$home->bindParam(":fld_website", $pWeb);
$home->bindParam(":fld_shortDesc", $pShort);
$home->bindParam(":fld_longDesc", $pLong);
$home->bindParam(":fld_pax", $pPax);
$home->bindParam(":fld_owner", $userId);
$home->bindParam(":fld_status", $status);
$home->execute();
echo "Place successfully saved";
?>