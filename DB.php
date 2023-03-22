<?php
    $host = "localhost";
    $user = "root";
    $pwd = "";
    $db = "University_courses";

    $con = new mysqli($host, $user, $pwd, $db);

    if($con->connect_error){
        echo "Fail ". $con->connect_error;
    }
    // $type =
?>