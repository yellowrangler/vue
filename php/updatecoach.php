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

// print "<br><br>json: ";	
// print_r($json);
// print "<br><br>data: ";	
// print_r($data);
// exit();

$id = $data->id; 
$firstName = $data->firstName;
$lastName = $data->lastName;
$description = $data->description;
$hourlyRate = $data->hourlyRate;
$arr = array('Hello','World!','Beautiful','Day!');
$areas = implode(",",$data->areas);
// $areas = $data->areas;

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

//--------------------------------------------------------------------------
// get member request information to see if data already present
//--------------------------------------------------------------------------
$sql = "SELECT * FROM requesttbl 
WHERE id = '$id'";

//
// sql query
//
$function = "select";
include ('mysqlquery.php');


//
// get the request data 
//
$count = mysqli_num_rows($sql_result);
if ($count > 0)
{
	// 
	// do update
	// 
	$sql = "UPDATE requesttbl 
					SET 
					firstName='$firstName',
					lastName='$lastName',
					description='$description',
					hourlyRate='$hourlyRate',
					areas='$areas' 
					WHERE id = $id";
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
	$sql = "INSERT INTO requesttbl(id, firstName, lastName, description, hourlyRate, areas) 
		VALUES ('$id','$firstName','$lastName','$description','$hourlyRate','$areas')";

	// print "<br><br>$sql";	
		
	//
	// sql query
	//
	$function = "insert";
}

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