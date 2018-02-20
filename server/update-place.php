<?php
// header("Access-Control-Allow-Origin:*");
include "connection.php";

if(isset($_POST["placeId"])) {
    $pid = $_POST["placeId"];
    $status = "confirmed";
    
    $place = $dbh->prepare("UPDATE tbl_place SET fld_status = :fld_status WHERE fld_placeId = :fld_placeId");
    $place->bindParam(":fld_status", $status);
    $place->bindParam(":fld_placeId", $pid);
    $place->execute(); 
    echo "Saved";
}

if(isset($_POST["placeId2"])) {
    $pid = $_POST["placeId2"];
    //$status = "confirmed";
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
    
    $place = $dbh->prepare("UPDATE tbl_place SET fld_name = :fld_name, fld_category = :fld_category, fld_desId = :fld_desId, fld_startPrice = :fld_startPrice, fld_address = :fld_address, fld_lat = :fld_lat, fld_lng = :fld_lng, fld_contact = :fld_contact, fld_website = :fld_website, fld_shortDesc = :fld_shortDesc, fld_longDesc = :fld_longDesc, fld_pax = :fld_pax WHERE fld_placeId = :fld_placeId");
    $place->bindParam(":fld_name", $pName);
    $place->bindParam(":fld_category", $pCategory);
    $place->bindParam(":fld_desId", $pMun);
    $place->bindParam(":fld_startPrice", $pPrice);
    $place->bindParam(":fld_address", $pAdd);
    $place->bindParam(":fld_lat", $pLat);
    $place->bindParam(":fld_lng", $pLng);
    $place->bindParam(":fld_contact", $pCnum);
    $place->bindParam(":fld_website", $pWeb);
    $place->bindParam(":fld_shortDesc", $pShort);
    $place->bindParam(":fld_longDesc", $pLong);
    $place->bindParam(":fld_pax", $pPax);
    $place->bindParam(":fld_placeId", $pid);
    $place->execute(); 
    echo "Saved";
}
?>