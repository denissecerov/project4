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
    <link rel="stylesheet" href="styles.css">
    <title>Buyer Dashboard</title>
	<link rel="stylesheet" type="text/css" href="buyerdashboard.css">

</head>
<body>
    <div class="container">
        <div class="welcome-note">
            <h1>Welcome, <?php echo $username; ?>!</h1>
            <p>Thank you for choosing our platform.</p>
        </div>
        
        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="Search for properties...">
            <button onclick="searchProperties()">Search</button>
        </div>
		
		<a href="wishlist.php" class="wishlist-btn">View Wishlist</a>
		
        <div class="property-cards">
            <div class="property-card" onclick="viewPropertyDetails('propertyId1')">
                <img src="propertyimages/1/ex.webp" alt="Property Image 1">
                <h3>Home in Alpharetta</h3>
                <p>Location: 4025 Dover Ave, Alpharetta, GA 30009</p>
                <p>Price: $664,990</p>
                <button onclick="addToWishlist('propertyId1')">Add to Wishlist</button>
            </div>
            	
            <div class="property-card" onclick="viewPropertyDetails('propertyId2')">
                <img src="propertyimages/2/ex.webp" alt="Property Image 2">
                <h3>Home in Lilburn</h3>
                <p>Location: 1275 Killian Shoals Way SW, Lilburn, GA 30047</p>
                <p>Price: $640,000</p>
                <button onclick="addToWishlist('propertyId2')">Add to Wishlist</button>
            </div>
			
			
            <div class="property-card" onclick="viewPropertyDetails('propertyId3')">
                <img src="propertyimages/3/ex.webp" alt="Property Image 3">
                <h3>Home in Atlanta</h3>
                <p>Location: 604 Julian St NW, Atlanta, GA 30318</p>
                <p>Price: $499,900</p>
                <button onclick="addToWishlist('propertyId3')">Add to Wishlist</button>
            </div>
			
            <div class="property-card" onclick="viewPropertyDetails('propertyId4')">
                <img src="propertyimages/4/ex.webp" alt="Property Image 4">
                <h3>Modern Home in Atlanta</h3>
                <p>Location: 1058 W Ave Sw, Atlanta, GA 30315</p>
                <p>Price: $449,900</p>
                <button onclick="addToWishlist('propertyId4')">Add to Wishlist</button>
            </div>
			
            <div class="property-card" onclick="viewPropertyDetails('propertyId5')">
                <img src="propertyimages/5/ex.webp" alt="Property Image 5">
                <h3>Home in Johns Creek</h3>
                <p>Location: 340 Falls Point Trl, Johns Creek, GA 30022</p>
                <p>Price: $1,175,000</p>
                <button onclick="addToWishlist('propertyId5')">Add to Wishlist</button>
            </div>
			
            <div class="property-card" onclick="viewPropertyDetails('propertyId6')">
                <img src="propertyimages/6/ex.webp" alt="Property Image 6">
                <h3>Pool House in Johns Creek</h3>
                <p>Location: 9890 Autry Falls Dr, Johns Creek, GA 30022</p>
                <p>Price: $1,350,000</p>
                <button onclick="addToWishlist('propertyId6')">Add to Wishlist</button>
            </div>
			
            <div class="property-card" onclick="viewPropertyDetails('propertyId7')">
                <img src="propertyimages/7/ex.webp" alt="Property Image 7">
                <h3>Condo in Atlanta</h3>
                <p>Location: 250 Park Avenue West NW #NW-709-709, Atlanta, GA 30313</p>
                <p>Price: $385,000</p>
                <button onclick="addToWishlist('propertyId7')">Add to Wishlist</button>
            </div>
			
            <div class="property-card" onclick="viewPropertyDetails('propertyId8')">
                <img src="propertyimages/8/ex.webp" alt="Property Image 8">
                <h3>Apartment for Rent</h3>
                <p>Location: 99 Centennial Olympic Park Dr, Atlanta, GA 30313</p>
                <p>Price: $1,360/month</p>
                <button onclick="addToWishlist('propertyId8')">Add to Wishlist</button>
            </div>
			
            <div class="property-card" onclick="viewPropertyDetails('propertyId9')">
                <img src="propertyimages/9/ex.webp" alt="Property Image 9">
                <h3>Home in Decatur</h3>
                <p>Location: 3661 Hofstra Ct, Decatur, GA 30034</p>
                <p>Price: $399,000</p>
                <button onclick="addToWishlist('propertyId9')">Add to Wishlist</button>
            </div>
			
            <div class="property-card" onclick="viewPropertyDetails('propertyId10')">
                <img src="propertyimages/10/ex.webp" alt="Property Image 10">
                <h3>Home in Stone Mountain</h3>
                <p>Location: 5575 Boggs Dr, Stone Mountain, GA 30087</p>
                <p>Price: $322,000</p>
                <button onclick="addToWishlist('propertyId10')">Add to Wishlist</button>
            </div>
        </div>
		
		 
    </div>
	<div id="propertyModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <div id="propertyDetails">
            
        </div>
        <div id="propertyImages">
            
        </div>
    </div>
</div>

    <script src="buyerdashboard.js"></script>
</body>
</html>
