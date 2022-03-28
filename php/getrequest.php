<?php
header('Access-Control-Allow-Origin: *');

//
// get date time for this transaction
//
$datetime = date("Y-m-d H:i:s");

// print_r($_POST);
// die();

// set variables
$enterdate = $datetime;


//
// db connect
//
$modulecontent = "Unable to get request  data";
include ('mysqlconnect.php');

//---------------------------------------------------------------
// get all current request  data
//---------------------------------------------------------------
$sql = "SELECT id, coachId, userEmail, message  FROM requesttbl";

//
// sql query
//
$function = "select";
include ('mysqlquery.php');

//
// get the request question information
//
//
// fill the array
//
$requestdata = array();
while($r = mysqli_fetch_assoc($sql_result)) {
    $requestdata[] = $r;
}

//
// close db connection
//
mysqli_close($dbConn);

//
// pass back info
//
exit(json_encode($requestdata));
?>
