<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
//
// post input
//

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
     exit;
}

$json = file_get_contents('php://input');
$data = json_decode($json);

$coachId = $data->coachId;
$userEmail = $data->userEmail;
$message = $data->message;

$msg = "ok";
//
// get date time for this transaction
//
$datetime = date("Y-m-d H:i:s");

// set variables
$enterdate = $datetime;

// create time stamp versions for insert to mysql
$enterdateTS = date("Y-m-d H:i:s", strtotime($datetime));

//
// db connect
//
$modulecontent = "Unable to update request data";
include ('mysqlconnect.php');

// 
// do insert
// 
$sql = "INSERT INTO requesttbl(id, coachId, userEmail, message) 
	VALUES ('$coachId','$userEmail','$message')";

// print "<br><br>$sql";	
	
//
// sql query
//
$function = "insert";

// $modulecontent = "Unable to $function requesttbl.";
include ("mysqlquery.php");
$sql_result_update = $sql_result;

//
// close db connection
//
mysqli_close($dbConn);

//
// pass back info
//
echo($msg);
?>