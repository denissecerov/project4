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
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Homelytics | Thank You!</title>
		<link rel="stylesheet" href="styles.css">
	</head>

	<body class="homepageFile">
		<!-- Header -->
		<div class="headingContainer">
			<div class="logo">
				<a href="homepage.html" class="title"><h1>Home<span class="titlePt2">lytics</span></h1></a>
			</div>
		</div>
		<hr class="headingLine">

		<div class="thankYouContainer">
			<h1>Welcome, <?php echo $username; ?>!</h1>
			<h1>Thank you for using</h1>
			<h1 class="homeColor">Home<span class="titlePt2">lytics</span></h1>
			<p>
				Click <a href="buyerdashboard.php">here</a> to go to dashboard.
			</p>
		</div>
		
	</body>
 </html>
