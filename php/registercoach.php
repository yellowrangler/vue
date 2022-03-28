<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

// functions
//

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit;
}

$json = file_get_contents('php://input');
$data = json_decode($json);

$firstName = $data->firstName;
$lastName = $data->lastName;
$description = $data->description;
$hourlyRate = $data->hourlyRate;

$areas = $data->areas;
$seperator = ',';
$areasStr = implode($separator, $areas);

$message = "";
$response = "";

// 
// db connect
//
$modulecontent = "Unable to add coach register coach for userEmail $lastName.";
include 'mysqlconnect.php';

//---------------------------------------------------------------
// Get memberid password for compare.
//---------------------------------------------------------------
$sql = "INSERT INTO coachtbl
				(firstName, lastName, description, hourlyRate, areas) 
				VALUES 
				('$firstName','$lastName','$description','$hourlyRate','$areasStr')";

//
// sql query
//
$function = "insert";
include 'mysqlquery.php';

// echo $sql;

//
// close db connection
//
mysqli_close($dbConn);
	
//
// pass back info
//
echo(json_encode($response));
?>
