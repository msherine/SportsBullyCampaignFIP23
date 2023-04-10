<?php
// Set up connection creds
ini_set('display_errors', 1);
error_reporting(E_ALL);

$user = "root";
$pass = "root";
$url = "localhost";
// Change the database name for each site
$db = "articles";

// Connect to db
$link = mysqli_connect($url, $user, $pass, $db, "8888");


// Check our connection
if(!$link) {
    error_log("Connection error: " . mysqli_connect_error());
}
?>