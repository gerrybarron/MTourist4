<?php
// header('Access-Control-Allow-Origin: *');
include "connection.php";

// get promotion data 
if(isset($_GET["promo"])){
    $status = $_GET["promo"];
    $place = $dbh->prepare("SELECT * FROM tbl_promotions");
    $place->execute();
    $data = $place->fetchAll(PDO::FETCH_ASSOC);
    
    $return = [];
    foreach ($data as $row) {
        $return[] = [ 
            'id' => $row['fld_id'],
            'promoId' => $row['fld_promoId'],
            'promoName' => $row['fld_promoName'],
            'promoCaption' => $row['fld_promoCaption'],
            'promoSlogan' => $row['fld_promoSlogan']
        ];
    }
    $dbh = null;
    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($return, JSON_NUMERIC_CHECK);
}

// get Description of municipalities
if(isset($_GET["description"])){
    $dest = $dbh->prepare("SELECT * FROM tbl_destinations");
    $dest->execute();
    $data = $dest->fetchAll(PDO::FETCH_ASSOC);
    
    $return = [];
    foreach ($data as $row) {
        $return[] = [ 
            'shortDesc' => $row['fld_shortDesc'],
            'longDesc' => $row['fld_longDesc']
        ];
    }
    $dbh = null;
    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($return, JSON_NUMERIC_CHECK);
}

//list of tourist
if(isset($_GET["status"])) {
    $status = $_GET["status"];
    $level = $_GET["level"];
    $users = $dbh->prepare("SELECT * FROM tbl_users WHERE fld_confirm = :fld_confirm AND fld_level = :fld_level");
    $users->bindParam(":fld_confirm", $status);
    $users->bindParam(":fld_level", $level);
    $users->execute();
    $data = $users->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($data, JSON_NUMERIC_CHECK);
}

//list of owner
if(isset($_GET["status2"])) {
    $status = $_GET["status2"];
    $level = $_GET["level"];
    $users = $dbh->prepare("SELECT * FROM tbl_users WHERE fld_confirm = :fld_confirm AND fld_level = :fld_level");
    $users->bindParam(":fld_confirm", $status);
    $users->bindParam(":fld_level", $level);
    $users->execute();
    $data = $users->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($data, JSON_NUMERIC_CHECK);
}

//list of unconfirmed owner
if(isset($_GET["status3"])) {
    $status = $_GET["status3"];
    $level = $_GET["level"];
    $users = $dbh->prepare("SELECT * FROM tbl_users WHERE fld_confirm = :fld_confirm AND fld_level = :fld_level");
    $users->bindParam(":fld_confirm", $status);
    $users->bindParam(":fld_level", $level);
    $users->execute();
    $data = $users->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($data, JSON_NUMERIC_CHECK);
}

//list of unconfirmed place
if(isset($_GET["status4"])) {
    $status = $_GET["status4"];
    $place = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_status = :fld_status");
    $place->bindParam(":fld_status", $status);
    $place->execute();
    $data = $place->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($data, JSON_NUMERIC_CHECK);
}

//list of confirmed place
if(isset($_GET["status5"])) {
    $status = $_GET["status5"];
    $place = $dbh->prepare("SELECT * FROM tbl_place WHERE fld_status = :fld_status");
    $place->bindParam(":fld_status", $status);
    $place->execute();
    $data = $place->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-type: application/json');
    //echo json_encode($return);
    echo json_encode($data, JSON_NUMERIC_CHECK);
}
?>