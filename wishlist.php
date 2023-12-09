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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wishlist</title>
    <link rel="stylesheet" href="wishlist.css"> 
</head>
<body>
    <div class="wishlist-container">
        <h1><?php echo $username; ?>'s Wishlist</h1>
        <div id="wishlistItems" class="wishlist-items">
        </div>
    </div>

    <script src="wishlist.js"></script> 
</body>
</html>
