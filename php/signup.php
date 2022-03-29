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

$userEmail = $data->email;
$password = $data->password;
$returnSecureToken = $data->returnSecureToken;
$expiresIn = 2000000;
$role='coach';
$localid = '';

$bytes = random_bytes(5);
$idToken = bin2hex($bytes);

$message = "";

// 
// db connect
//
$modulecontent = "Unable to signup for vue userEmail $userEmail.";
include 'mysqlconnect.php';

//---------------------------------------------------------------
// see if already signed up
//---------------------------------------------------------------
$sql = "SELECT *  
FROM authtbl 
WHERE email = '$userEmail'";

//
// sql query
//
$function = "select";
include 'mysqlquery.php';

//
// check if we got any rows
//

$count = mysqli_num_rows($sql_result);
if ($count == 1)
{
	$response = array(
		"localid" => '',
    "idToken" => '',
    "expiresin" => '',
    "message" => "You are already signd up. Please login!"
	);

	// 
	// bye bye
	// 
	echo(json_encode($response));
}

// 
// insert the new coach
// 
$sql = "INSERT INTO authtbl
				(
					email, password, role, token, durration
				) 
				VALUES 
				(
					'$userEmail','$password', '$role', '$idToken','$expiresIn'
				)";

//
// sql query
//
$function = "insert";
include 'mysqlquery.php';	

// 
// get insert id
// 
$localid = mysqli_insert_id($dbConn);

$response = array(
	"localid" => $localid,
  "idToken" => $idToken,
  "expiresin" => $expiresIn,
  "message" => "Signin Successful!"
);

//
// close db connection
//
mysqli_close($dbConn);
	
//
// pass back info
//
echo(json_encode($response));
?>
