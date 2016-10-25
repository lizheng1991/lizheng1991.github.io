<?php
header("Content-Type: text/html; charset=utf-8");
echo header("Access-Control-Allow-Origin:*"); 
$username=$_GET['username'];
$password=$_GET['password'];
$staff = array(
array("name"=>"李征","age"=>"25"),
array("name"=>"王二狗","age"=>"26"),
array("name"=>"张宝库","age"=>"27")
);
$result=$username."你好,你的密码是：".$password;
echo json_encode($staff);
?>
