<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Get all of something
// This is something for testing purposes

    //$tbl = "articles";
    
//$col = "marvel_id";
//$id = "2";
//getSingle($tbl, $col, $id);
//Get all of something
function getAll($tbl) {
    include("connect.php");
    $queryAll = "SELECT * FROM articles, campaigns";
    //echo $queryAll;
    $runAll = mysqli_query($link, $queryAll);
    if($runAll){
        return $runAll;
    }else{
        $error = "There was an error caused by the frontend dev, not the backend fault.";
        return $error;
    }

    mysqli_close($link);
}

function getSingle($tbl, $col, $id) {
    include("connect.php");
    $querySingle = "SELECT * FROM $tbl WHERE {$col} = {$id}";
    $runSingle = mysqli_query($link, $querySingle);
    //echo $querySingle;
    if($runSingle){
        return $runSingle;
    }else{
        $error = "From getSingle()";
        return $error;
    }
    mysqli_close($link);
}
//Get one result back

//Get filtered result back

?>