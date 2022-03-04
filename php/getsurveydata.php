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
$modulecontent = "Unable to get survey  data";
include ('mysqlconnect.php');

//---------------------------------------------------------------
// get all current survey  data
//---------------------------------------------------------------
$sql = "SELECT id, name, rating  FROM surveytbl";

//
// sql query
//
$function = "select";
include ('mysqlquery.php');

//
// get the survey question information
//
//
// fill the array
//
$surveydata = array();
while($r = mysqli_fetch_assoc($sql_result)) {
    $surveydata[] = $r;
}

//
// close db connection
//
mysqli_close($dbConn);

//
// pass back info
//
exit(json_encode($surveydata));

?>
