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
$modulecontent = "Unable to open connection to db for request data";
include ('mysqlconnect.php');

// 
// do insert
// 
$sql = "INSERT INTO requesttbl(coachId, userEmail, message) 
	VALUES ('$coachId','$userEmail','$message')";
//
// sql query
//
$function = "insert";

$modulecontent = "Unable to insert request data";
include ("mysqlquery.php");
$sql_result_insert = $sql_result;

// 
// get insert id
// 
$lastinsertid = mysqli_insert_id($dbConn);

//
// close db connection
//
mysqli_close($dbConn);

//
// pass back info
//
echo($lastinsertid);
?>