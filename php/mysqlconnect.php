<?php 

//------------------------------------------------------
// get admin user info
//------------------------------------------------------
// open connection to host
$DBhost = "localhost";
$DBschema = "vue";
$DBuser = "tarryc";
$DBpassword = "tarryc";

//
// connect to db
//
$dbConn = @mysqli_connect($DBhost, $DBuser, $DBpassword, $DBschema);
if (!$dbConn) 
{
	$dberr = mysqli_error();
	$msgtext = "DB error: $dberr - Error mysql connect.$modulecontent.";
	echo $msgtext;
}
?>