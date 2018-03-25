<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
include "connection.php";

if(isset($_POST["sM1"])){
    $destId1 = "d-01";
    $destId2 = "d-02";
    $destId3 = "d-03";
    $destId4 = "d-04";
    $destId5 = "d-05";
    $destId6 = "d-06";
    $destId7 = "d-07";
    $destId8 = "d-08";
    $destId9 = "d-09";
    $destId10 = "d-10";
    $destId11 = "d-11";
    $destId12 = "d-12";
    $destId13 = "d-13";

    $sM1 = $_POST["sM1"];
    $sM2 = $_POST["sM2"];
    $sM3 = $_POST["sM3"];
    $sM4 = $_POST["sM4"];
    $sM5 = $_POST["sM5"];
    $sM6 = $_POST["sM6"];
    $sM7 = $_POST["sM7"];
    $sM8 = $_POST["sM8"];
    $sM9 = $_POST["sM9"];
    $sM10 = $_POST["sM10"];
    $sM11 = $_POST["sM11"];
    $sM12 = $_POST["sM12"];
    $sM13 = $_POST["sM13"];
    

    $dest1 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest1->bindParam(":fld_destId", $destId1);
    $dest1->bindParam(":fld_shortDesc", $sM1);
    $dest1->execute();

    $dest2 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest2->bindParam(":fld_destId", $destId2);
    $dest2->bindParam(":fld_shortDesc", $sM2);
    $dest2->execute();

    $dest3 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest3->bindParam(":fld_destId", $destId3);
    $dest3->bindParam(":fld_shortDesc", $sM3);
    $dest3->execute();

    $dest4 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest4->bindParam(":fld_destId", $destId4);
    $dest4->bindParam(":fld_shortDesc", $sM4);
    $dest4->execute();

    $dest5 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest5->bindParam(":fld_destId", $destId5);
    $dest5->bindParam(":fld_shortDesc", $sM5);
    $dest5->execute();

    $dest6 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest6->bindParam(":fld_destId", $destId6);
    $dest6->bindParam(":fld_shortDesc", $sM6);
    $dest6->execute();

    $dest7 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest7->bindParam(":fld_destId", $destId7);
    $dest7->bindParam(":fld_shortDesc", $sM7);
    $dest7->execute();

    $dest8 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest8->bindParam(":fld_destId", $destId8);
    $dest8->bindParam(":fld_shortDesc", $sM8);
    $dest8->execute();

    $dest9 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest9->bindParam(":fld_destId", $destId9);
    $dest9->bindParam(":fld_shortDesc", $sM9);
    $dest9->execute();

    $dest10 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest10->bindParam(":fld_destId", $destId10);
    $dest10->bindParam(":fld_shortDesc", $sM10);
    $dest10->execute();

    $dest11 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest11->bindParam(":fld_destId", $destId11);
    $dest11->bindParam(":fld_shortDesc", $sM11);
    $dest11->execute();

    $dest12 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest12->bindParam(":fld_destId", $destId12);
    $dest12->bindParam(":fld_shortDesc", $sM12);
    $dest12->execute();

    $dest13 = $dbh->prepare("UPDATE tbl_destinations SET fld_shortDesc = :fld_shortDesc WHERE fld_destId = :fld_destId");
    $dest13->bindParam(":fld_destId", $destId13);
    $dest13->bindParam(":fld_shortDesc", $sM13);
    $dest13->execute();
}

if(isset($_POST["lM1"])){
    $destId1 = "d-01";
    $destId2 = "d-02";
    $destId3 = "d-03";
    $destId4 = "d-04";
    $destId5 = "d-05";
    $destId6 = "d-06";
    $destId7 = "d-07";
    $destId8 = "d-08";
    $destId9 = "d-09";
    $destId10 = "d-10";
    $destId11 = "d-11";
    $destId12 = "d-12";
    $destId13 = "d-13";

    $lM1 = $_POST["lM1"];
    $lM2 = $_POST["lM2"];
    $lM3 = $_POST["lM3"];
    $lM4 = $_POST["lM4"];
    $lM5 = $_POST["lM5"];
    $lM6 = $_POST["lM6"];
    $lM7 = $_POST["lM7"];
    $lM8 = $_POST["lM8"];
    $lM9 = $_POST["lM9"];
    $lM10 = $_POST["lM10"];
    $lM11 = $_POST["lM11"];
    $lM12 = $_POST["lM12"];
    $lM13 = $_POST["lM13"];
    

    $dest1 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest1->bindParam(":fld_destId", $destId1);
    $dest1->bindParam(":fld_longDesc", $lM1);
    $dest1->execute();

    $dest2 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest2->bindParam(":fld_destId", $destId2);
    $dest2->bindParam(":fld_longDesc", $lM2);
    $dest2->execute();

    $dest3 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest3->bindParam(":fld_destId", $destId3);
    $dest3->bindParam(":fld_longDesc", $lM3);
    $dest3->execute();

    $dest4 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest4->bindParam(":fld_destId", $destId4);
    $dest4->bindParam(":fld_longDesc", $lM4);
    $dest4->execute();

    $dest5 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest5->bindParam(":fld_destId", $destId5);
    $dest5->bindParam(":fld_longDesc", $lM5);
    $dest5->execute();

    $dest6 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest6->bindParam(":fld_destId", $destId6);
    $dest6->bindParam(":fld_longDesc", $lM6);
    $dest6->execute();

    $dest7 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest7->bindParam(":fld_destId", $destId7);
    $dest7->bindParam(":fld_longDesc", $lM7);
    $dest7->execute();

    $dest8 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest8->bindParam(":fld_destId", $destId8);
    $dest8->bindParam(":fld_longDesc", $lM8);
    $dest8->execute();

    $dest9 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest9->bindParam(":fld_destId", $destId9);
    $dest9->bindParam(":fld_longDesc", $lM9);
    $dest9->execute();

    $dest10 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest10->bindParam(":fld_destId", $destId10);
    $dest10->bindParam(":fld_longDesc", $lM10);
    $dest10->execute();

    $dest11 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest11->bindParam(":fld_destId", $destId11);
    $dest11->bindParam(":fld_longDesc", $lM11);
    $dest11->execute();

    $dest12 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest12->bindParam(":fld_destId", $destId12);
    $dest12->bindParam(":fld_longDesc", $lM12);
    $dest12->execute();

    $dest13 = $dbh->prepare("UPDATE tbl_destinations SET fld_longDesc = :fld_longDesc WHERE fld_destId = :fld_destId");
    $dest13->bindParam(":fld_destId", $destId13);
    $dest13->bindParam(":fld_longDesc", $lM13);
    $dest13->execute();
}
?>