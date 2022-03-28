<?php
// header('Access-Control-Allow-Origin: *');

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
$modulecontent = "Unable to get coach  data";
include ('mysqlconnect.php');

//---------------------------------------------------------------
// get all current coach  data
//---------------------------------------------------------------
$sql = "SELECT id, firstName, lastName, description, hourlyRate, areas  FROM coachtbl";

//
// sql query
//
$function = "select";
include ('mysqlquery.php');

//
// get the coach question information
//
//
// fill the array
//
$coachdata = array();
while($r = mysqli_fetch_assoc($sql_result)) {
    $areasHold = $r['areas'];

    $r['areas'] = explode(",",$areasHold);
    
    $coachdata[] = $r;
}

//
// close db connection
//
mysqli_close($dbConn);

//
// pass back info
//
exit(json_encode($coachdata));

?>
