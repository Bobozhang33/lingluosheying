
<?php
	require_once("init.php");
	$sql="select * from ll_carousel;";
	$result=mysqli_query($conn,$sql);
	$rows=mysqli_fetch_all($result,MYSQL_ASSOC);
	echo json_encode($rows);