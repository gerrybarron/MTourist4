<?php
header('Access-Control-Allow-Origin: *');
include "connection.php";

//List All of Confirmed Place of Owner
if(isset($_GET["status"])) {
    $status = $_GET["status"];
    $owner = $_GET["owner"];

    $place = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_status = :fld_status AND fld_owner = :fld_owner  ORDER BY fld_id DESC");
    $place->bindParam(":fld_status", $status);
    $place->bindParam(":fld_owner", $owner);
    $place->execute();
    $data = $place->fetchAll(PDO::FETCH_ASSOC);
    
    $return = [];
    foreach ($data as $row) {
        $return[] = [ 
            'id' => $row['fld_id'],
            'place_id' => $row['fld_placeId'],
            'dest_id' => $row['fld_desId'],
            'pName' => $row['fld_name'],
            'pCat' => $row['fld_category'],
            'pAdd' => $row['fld_address'],
            'pContact' => $row['fld_contact'],
            'pWebsite' => $row['fld_website'],
            'pStartPrice' => $row['fld_startPrice'],
            'pShortDesc' => $row['fld_shortDesc'],
            'pLongDesc' => $row['fld_longDesc'],
            'pLat' => $row['fld_lat'],
            'pLng' => $row['fld_lng'],
            'pPax' => $row['fld_pax'],
            'pOwner' => $row['fld_owner'],
            'pStatus' => $row['fld_status'],
            'pTimeStamp' => $row['fld_timestamp']
        ];
    }

    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($return, JSON_NUMERIC_CHECK);
}

//List All of Unconfirmed Place of Owner
if(isset($_GET["status1"])) {
    $status = $_GET["status1"];
    $owner = $_GET["owner"];

    $place = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_status = :fld_status AND fld_owner = :fld_owner ORDER BY fld_id DESC");
    $place->bindParam(":fld_status", $status);
    $place->bindParam(":fld_owner", $owner);
    $place->execute();
    $data = $place->fetchAll(PDO::FETCH_ASSOC);
    
    $return = [];
    foreach ($data as $row) {
        $return[] = [ 
            'id' => $row['fld_id'],
            'place_id' => $row['fld_placeId'],
            'dest_id' => $row['fld_desId'],
            'pName' => $row['fld_name'],
            'pCat' => $row['fld_category'],
            'pAdd' => $row['fld_address'],
            'pContact' => $row['fld_contact'],
            'pWebsite' => $row['fld_website'],
            'pStartPrice' => $row['fld_startPrice'],
            'pShortDesc' => $row['fld_shortDesc'],
            'pLongDesc' => $row['fld_longDesc'],
            'pLat' => $row['fld_lat'],
            'pLng' => $row['fld_lng'],
            'pPax' => $row['fld_pax'],
            'pOwner' => $row['fld_owner'],
            'pStatus' => $row['fld_status'],
            'pTimeStamp' => $row['fld_timestamp']
        ];
    }

    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($return, JSON_NUMERIC_CHECK);
}

//Owner Profile
if(isset($_GET["ownerId"])) {
    $ownerId = $_GET["ownerId"];

    $owner = $dbh->prepare("SELECT * FROM tbl_owner WHERE fld_ownerId = :fld_ownerId");
    $owner->bindParam(":fld_ownerId", $ownerId);
    $owner->execute();
    $data = $owner->fetch(PDO::FETCH_ASSOC);
    
    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($data, JSON_NUMERIC_CHECK);
}

if(isset($_GET["parentId"])) {
    $parentId = $_GET["parentId"];

    $owner = $dbh->prepare("SELECT * FROM tbl_owner WHERE fld_parentId = :fld_parentId");
    $owner->bindParam(":fld_parentId", $parentId);
    $owner->execute();
    $data = $owner->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($data, JSON_NUMERIC_CHECK);
}

if(isset($_GET["userId"])) {
    $userId = $_GET["userId"];

    $owner = $dbh->prepare("SELECT * FROM tbl_owner WHERE fld_id = :fld_id");
    $owner->bindParam(":fld_id", $userId);
    $owner->execute();
    $data = $owner->fetch(PDO::FETCH_ASSOC);
    
    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($data, JSON_NUMERIC_CHECK);
}
?>