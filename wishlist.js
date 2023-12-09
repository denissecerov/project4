document.addEventListener('DOMContentLoaded', function() 
{
    displayWishlist();
});

function removeFromWishlist(propertyId)
{
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    wishlist = wishlist.filter(item => item.propertyId !== propertyId);

    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    displayWishlist();
}

function displayWishlist() 
{
    let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

    let wishlistContainer = document.getElementById('wishlistItems');
    wishlistContainer.innerHTML = '';

    if (wishlistItems.length === 0) 
	{
        wishlistContainer.innerHTML = '<p>Your wishlist is empty.</p>';
    } 
	else 
	{
        wishlistItems.forEach(item => 
		{
           
            let wishlistItemDiv = document.createElement('div');
            wishlistItemDiv.classList.add('wishlist-item');

            let propertyDetails = item.details;

            let propertyTitle = document.createElement('h2');
            propertyTitle.textContent = propertyDetails.title;

            let propertyLocation = document.createElement('p');
            propertyLocation.innerHTML = `<strong>Location:</strong> ${propertyDetails.location}`;

            let propertyPrice = document.createElement('p');
            propertyPrice.innerHTML = `<strong>Price:</strong> ${propertyDetails.price}`;

            let removeButton = document.createElement('button');
            removeButton.textContent = 'Remove from Wishlist';
            removeButton.addEventListener('click', function() 
			{
                removeFromWishlist(item.propertyId);
            });

            wishlistItemDiv.appendChild(propertyTitle);
            wishlistItemDiv.appendChild(propertyLocation);
            wishlistItemDiv.appendChild(propertyPrice);
            wishlistItemDiv.appendChild(removeButton);
			wishlistContainer.appendChild(wishlistItemDiv);
        });
    }
}
