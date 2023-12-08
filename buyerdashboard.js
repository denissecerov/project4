const properties = [
    { id: 1, title: 'Luxury Apartment', location: 'Downtown', price: '$1,500,000' },
    { id: 2, title: 'Townhome', location: 'Suburb', price: '$500,000' },
    { id: 3, title: 'Modern Condo', location: 'Downtown', price: '$900,000' },
    // Add more properties as needed
];

function searchProperties() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    // Filter properties based on search input
    const searchResults = properties.filter(property =>
        property.title.toLowerCase().includes(searchInput) ||
        property.location.toLowerCase().includes(searchInput)
    );

    // Clear existing property cards
    clearPropertyCards();

    // Display search results
    displayPropertyCards(searchResults);
}

function displayPropertyCards(propertyList) {
    const propertyCardsContainer = document.querySelector('.property-cards');

    propertyList.forEach(property => {
        const propertyCard = createPropertyCard(property);
        propertyCardsContainer.appendChild(propertyCard);
    });
}

function createPropertyCard(property) {
    const propertyCard = document.createElement('div');
    propertyCard.classList.add('property-card');
    propertyCard.onclick = function() {
        viewPropertyDetails(property.id);
    };

    // Populate card content
    propertyCard.innerHTML = `
        <img src="property_image${property.id}.jpeg" alt="${property.title}">
        <h3>${property.title}</h3>
        <p>Location: ${property.location}</p>
        <p>Price: ${property.price}</p>
        <button onclick="addToWishlist(${property.id})">Add to Wishlist</button>
    `;

    return propertyCard;
}

function clearPropertyCards() {
    const propertyCardsContainer = document.querySelector('.property-cards');
    propertyCardsContainer.innerHTML = ''; // Clear existing cards
}

// Sample function to view property details
function viewPropertyDetails(propertyId) {
    console.log(`Viewing details for property ${propertyId}`);
}

// Sample function to add to wishlist
function addToWishlist(propertyId) {
    console.log(`Added property ${propertyId} to wishlist`);
}