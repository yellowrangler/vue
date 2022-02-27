<?php 

$sql_result = @mysqli_query($dbConn, $sql);
if (!$sql_result)
{

	$msgtext = "System Error: $sqlerr. sql = $sql";

	echo $msgtext;
}

?>