<?php

$firstname = $_POST['first-name'];
$lastname = $_POST['last-name'];

header("Expires: Mon, 26 Jul 1997 05:00:00 GMT" );
header("Last-Modified: " . gmdate( "D, d M Y H:i:s" ) . "GMT" );
header("Cache-Control: no-cache, must-revalidate" );
header("Pragma: no-cache" );
header("Content-Type: text/xml; charset=utf-8");

echo   '<?xml version="1.0" encoding="UTF-8" ?>
		<people>
			<person>
				<first-name>'.$firstname.'</first-name>
				<last-name>'.$lastname.'</last-name>
			</person>
		</people>';
?>