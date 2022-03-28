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
$localid = '';

$bytes = random_bytes(5);
$idToken = bin2hex($bytes);

$message = "";

// 
// db connect
//
$modulecontent = "Unable to login for ddd userEmail $userEmail.";
include 'mysqlconnect.php';

//---------------------------------------------------------------
// Get memberid password for compare.
//---------------------------------------------------------------
$sql = "SELECT *  
FROM authtbl 
WHERE email = '$userEmail' AND password = '$password'";

//
// sql query
//
$function = "select";
include 'mysqlquery.php';

//
// check if we got any rows
//

$count = mysqli_num_rows($sql_result);
if ($count != 1)
{
	$response = array(
		"localid" => '',
    "idToken" => '',
    "expiresin" => '',
    "message" => "Login Error. Please try again!"
	);

	// 
	// bye bye
	// 
	echo(json_encode($response));
}

$row = mysqli_fetch_assoc($sql_result);

$localid = $row['id'];

$response = array(
	"localid" => $localid,
  "idToken" => $idToken,
  "expiresin" => $expiresIn,
  "message" => "Login Successful!"
);

// 
//  update aut table 
// 
// 
$sql = "UPDATE authtbl 
				SET token='$idToken', durration='$expiresIn'
				WHERE id='$localid'";
//
// sql query
//
$function = "update";
include 'mysqlquery.php';

//
// close db connection
//
mysqli_close($dbConn);
	
//
// pass back info
//
echo(json_encode($response));
?>
