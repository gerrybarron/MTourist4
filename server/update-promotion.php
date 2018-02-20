<?php
// header('Access-Control-Allow-Origin: *');
include "connection.php";
// $sql = "SELECT * FROM tbl_test";

if(isset($_POST["sliderTagline1"])){
    $tagline = $_POST["sliderTagline1"];
    $slogan = $_POST["sliderSlogan1"];
    $promoId = "slide-promo1";

    $promo = $dbh->prepare("UPDATE tbl_promotions SET fld_promoCaption = :fld_promoCaption, fld_promoSlogan = :fld_promoSlogan WHERE fld_promoId = :fld_promoId");
    $promo->bindParam(":fld_promoCaption", $tagline);
    $promo->bindParam(":fld_promoSlogan", $slogan);
    $promo->bindParam(":fld_promoId", $promoId);
    $promo->execute(); 
}

if(isset($_POST["sliderTagline2"])){
    $tagline = $_POST["sliderTagline2"];
    $slogan = $_POST["sliderSlogan2"];
    $promoId = "slide-promo2";

    $promo = $dbh->prepare("UPDATE tbl_promotions SET fld_promoCaption = :fld_promoCaption, fld_promoSlogan = :fld_promoSlogan WHERE fld_promoId = :fld_promoId");
    $promo->bindParam(":fld_promoCaption", $tagline);
    $promo->bindParam(":fld_promoSlogan", $slogan);
    $promo->bindParam(":fld_promoId", $promoId);
    $promo->execute(); 
}

if(isset($_POST["sliderTagline3"])){
    $tagline = $_POST["sliderTagline3"];
    $slogan = $_POST["sliderSlogan3"];
    $promoId = "slide-promo3";

    $promo = $dbh->prepare("UPDATE tbl_promotions SET fld_promoCaption = :fld_promoCaption, fld_promoSlogan = :fld_promoSlogan WHERE fld_promoId = :fld_promoId");
    $promo->bindParam(":fld_promoCaption", $tagline);
    $promo->bindParam(":fld_promoSlogan", $slogan);
    $promo->bindParam(":fld_promoId", $promoId);
    $promo->execute(); 
}

if(isset($_POST["sliderTagline4"])){
    $tagline = $_POST["sliderTagline4"];
    $slogan = $_POST["sliderSlogan4"];
    $promoId = "main-promo";

    $promo = $dbh->prepare("UPDATE tbl_promotions SET fld_promoCaption = :fld_promoCaption, fld_promoSlogan = :fld_promoSlogan WHERE fld_promoId = :fld_promoId");
    $promo->bindParam(":fld_promoCaption", $tagline);
    $promo->bindParam(":fld_promoSlogan", $slogan);
    $promo->bindParam(":fld_promoId", $promoId);
    $promo->execute(); 
}
?>