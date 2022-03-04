<?php
header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST');
// header("Access-Control-Allow-Headers: X-Requested-With");
//
// post input
//

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
     exit;
}


$json = file_get_contents('php://input');

$data = json_decode($json);

$name = $data->name;
$rating = $data->rating;

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
$modulecontent = "Unable to update survey data";
include ('mysqlconnect.php');

//--------------------------------------------------------------------------
// get member survey information to see if data already present
//--------------------------------------------------------------------------
$sql = "SELECT * FROM surveytbl 
WHERE name = '$name'";

//
// sql query
//
$function = "select";
include ('mysqlquery.php');


//
// get the survey data 
//
$count = mysqli_num_rows($sql_result);
if ($count > 0)
{
	// 
	// do update
	// 
	$sql = "UPDATE surveytbl 
		SET rating = '$rating' 
		WHERE name = '$name'";

	//
	// sql query
	//
	$function = "update";
}
else
{
	// 
	// do insert
	// 
	$sql = "INSERT INTO surveytbl 
		(name, rating)
		VALUES 
		('$name', '$rating')";

	// print "<br><br>$sql";	
		
	//
	// sql query
	//
	$function = "insert";
}

$modulecontent = "Unable to $function surveytbl.";
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
