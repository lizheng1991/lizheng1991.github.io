<?php
header("Content-Type: text/html; charset=utf-8");
header("Access-Control-Allow-Origin:*"); 
header('Access-Control-Allow-Methods:GET'); 
header('Access-Control-Allow-Headers:x-requested-with,content-type');
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
