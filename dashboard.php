<?php
session_start();

if (!isset($_SESSION['username'])) 
{
    header("Location: login.html");
    exit();
}

$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Buyer Dashboard</title>
	<link rel="stylesheet" type="text/css" href="buyerdashboard.css">
<head>
    <title>Dashboard</title>
</head>
<body>
    <h2>Welcome, <?php echo $username; ?>!</h2>
    <p>This is your dashboard</p>
    
</body>
</html>
