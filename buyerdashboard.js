function searchProperties() 
{
	let input = document.getElementById('searchInput').value.toUpperCase();
    let propertyCards = document.querySelectorAll('.property-card');

    propertyCards.forEach(card => 
	{
        let title = card.querySelector('h3').innerText.toUpperCase();
        let location = card.querySelectorAll('p')[0].innerText.toUpperCase();
        let price = card.querySelectorAll('p')[1].innerText.toUpperCase();
		let bedroom = card.querySelectorAll('p')[1].innerText.toUpperCase();

        if 
		(
            title.includes(input) ||
            location.includes(input) ||
            price.includes(input) ||
			bedroom.includes(input)
        ) 
		{
            card.style.display = 'block';
        } else 
		{
            card.style.display = 'none';
        }
    });
}

function viewPropertyDetails(propertyId) 
{
    let propertyDetails = {};

    if (propertyId === 'propertyId1') 
	{
        propertyDetails = 
		{
            title: "Home in Alpharetta",
            location: "4025 Dover Ave, Alpharetta, GA 30009",
            price: "$664,990",
            images: ["propertyimages/1/ex.webp", "propertyimages/1/2.webp", "propertyimages/1/3.webp", "propertyimages/1/4.webp", "propertyimages/1/5.webp", "propertyimages/1/6.webp", "propertyimages/1/7.webp"],
			bedroom:"4",
			bath:"3",
			sqft:"2129",
			description:"Presenting a stunning 2129 sq ft, 4 bed 3 bath home in Alpharetta for $664,990. This meticulously crafted residence boasts spacious living areas, elegant bedrooms, and modern amenities, providing an ideal haven for luxurious family living in a sought-after community."	
        };
    }
	
    else if (propertyId === 'propertyId2') 
	{
        propertyDetails = 
		{
            title: "Home in Lilburn",
            location: "1275 Killian Shoals Way SW, Lilburn, GA 30047",
            price: "$640,000",
            images: ["propertyimages/2/ex.webp", "propertyimages/2/2.webp", "propertyimages/2/3.webp", "propertyimages/2/4.webp", "propertyimages/2/5.webp", "propertyimages/2/6.webp", "propertyimages/2/7.webp"],
			bedroom:"5",
			bath:"4",
			sqft:"2870",
			description:"Introducing a remarkable 2129 sq ft, 5 bed 4 bath home in Lilburn, GA, priced at $664,000. This exceptional property features a sauna, gym, and spacious living areas, offering a perfect blend of luxury and functionality for an elevated lifestyle."
        };
    }
	
	else if (propertyId === 'propertyId3') 
	{
        propertyDetails = 
		{
            title: "House in Atlanta",
            location: "604 Julian St NW, Atlanta, GA 30318",
            price: "$499,900",
            images: ["propertyimages/3/ex.webp", "propertyimages/3/2.webp", "propertyimages/3/3.webp", "propertyimages/3/4.webp", "propertyimages/3/5.webp", "propertyimages/3/6.webp"],
            bedroom: "4",
			sqft: "1344",
			bath: "3",
			description: "Discover urban sophistication in this 1344 sq ft modern home in Atlanta. Featuring 4 beds and 3 baths, this residence embodies sleek design, offering a perfect blend of comfort and style for metropolitan living at its finest."
        };
    }
	
	
	else if (propertyId === 'propertyId4') 
	{
        propertyDetails = 
		{
            title: "Modern Home in Atlanta",
            location: "1058 W Ave Sw, Atlanta, GA 30315",
            price: "$449,900",
            images: ["propertyimages/4/ex.webp", "propertyimages/4/2.webp", "propertyimages/4/3.webp", "propertyimages/4/4.webp", "propertyimages/4/5.webp", "propertyimages/4/6.webp"],
            bedroom: "3",
			sqft: "1484",
			bath: "3",
			description: "Experience contemporary living in this 1824 sq ft modern abode, ideally situated just outside downtown Atlanta. Boasting sleek design elements, spacious interiors, and seamless indoor-outdoor flow, this home offers an urban oasis for sophisticated living near the vibrant cityscape."
        };
    }
	
	else if (propertyId === 'propertyId5') 
	{
        propertyDetails = 
		{
            title: "Home in Johns Creek",
            location: "340 Falls Point Trl, Johns Creek, GA 30022",
            price: "$1,175,000",
            images: ["propertyimages/5/ex.webp", "propertyimages/5/2.webp", "propertyimages/5/3.webp", "propertyimages/5/4.webp", "propertyimages/5/5.webp", "propertyimages/5/6.webp", "propertyimages/5/7.webp"],
            bedroom: "5",
			sqft: "5954",
			bath: "6",
			description:"Discover luxury living at its finest in this 5-bedroom, 6-bathroom masterpiece located at 340 Falls Point Trl, Johns Creek, GA 30022. Boasting 5,954 square feet of opulent space, this residence seamlessly blends modern design with classic elegance. Priced at $1,175,000, this is your chance to experience the epitome of refined living in Johns Creek."
        };
    }
	
	else if (propertyId === 'propertyId6') 
	{
        propertyDetails = 
		{
            title: "Pool House in Johns Creek",
            location: "9890 Autry Falls Dr, Johns Creek, GA 30022",
            price: "$1,350,900",
            images: ["propertyimages/6/ex.webp", "propertyimages/6/2.webp", "propertyimages/6/3.webp", "propertyimages/6/4.webp", "propertyimages/6/5.webp", "propertyimages/6/6.webp", "propertyimages/6/7.webp"],
            bedroom: "6",
			sqft: "6896",
			bath: "5",
			description:"Nestled in Johns Creek, GA, discover luxury living in this 6896 sq ft, 6 bed 5 bath home, complete with a refreshing pool oasis. Priced at $1,350,000, this exquisite residence offers generous spaces, elegant bedrooms, and resort-style amenities, perfect for sophisticated entertainment and relaxation."

        };
    }
	
	else if (propertyId === 'propertyId7') 
	{
        propertyDetails = 
		{
            title: "Condo in Atlanta",
            location: "250 Park Avenue West NW #NW-709-709, Atlanta, GA 30313",
            price: "$385,900",
            images: ["propertyimages/7/ex.webp", "propertyimages/7/2.webp", "propertyimages/7/3.webp", "propertyimages/7/4.webp", "propertyimages/7/5.webp", "propertyimages/7/6.webp", "propertyimages/7/7.webp"],
            bedroom: "1",
			sqft: "1202",
			bath: "1",
			description:"Embrace urban living in this 1202 sq ft downtown Atlanta condo, featuring 1 bed and 1 bath. Enjoy modern design, panoramic city views, and a vibrant location close to amenities, offering a stylish and convenient metropolitan lifestyle at its finest."
        };
    }
	
	else if (propertyId === 'propertyId8') 
	{
        propertyDetails = 
		{
            title: "Apartment for Rent",
            location: "99 Centennial Olympic Park Dr, Atlanta, GA 30313",
            price: "$1,360/month",
            images: ["propertyimages/8/ex.webp", "propertyimages/8/2.webp", "propertyimages/8/3.webp", "propertyimages/8/4.webp", "propertyimages/8/5.webp", "propertyimages/8/6.webp", "propertyimages/8/7.webp"],
            bedroom: "1",
			sqft: "382",
			bath: "1",
			description:"Discover city living in this stylish 382 sqft studio apartment for rent in downtown Atlanta. Boasting a compact yet functional space, this residence offers modern amenities, convenience, and proximity to urban attractions, perfect for those seeking a vibrant city lifestyle."
        };
    }
	
	else if (propertyId === 'propertyId9') 
	{
        propertyDetails = {
            title: "Home in Decatur",
            location: "3661 Hofstra Ct, Decatur, GA 30034",
            price: "$399,000",
            images: ["propertyimages/9/ex.webp", "propertyimages/9/2.webp", "propertyimages/9/3.webp", "propertyimages/9/4.webp", "propertyimages/9/5.webp", "propertyimages/9/6.webp", "propertyimages/9/7.webp"],
            bedroom: "5",
			sqft: "2584",
			bath: "4",
			description:"Explore comfort and space in this inviting 2584 sqft Decatur, GA home featuring 5 beds and 4 baths. Embrace modern living with ample room, versatile living areas, and a serene neighborhood, offering a perfect blend of convenience and tranquility."
			
        };
    }
	
	else if (propertyId === 'propertyId10') 
	{
        propertyDetails = 
		{
            title: "Home in Stone Mountain",
            location: "5575 Boggs Dr, Stone Mountain, GA 30087",
            price: "$322,900",
            images: ["propertyimages/10/ex.webp", "propertyimages/10/2.webp", "propertyimages/10/3.webp", "propertyimages/10/4.webp", "propertyimages/10/5.webp", "propertyimages/10/6.webp", "propertyimages/10/7.webp"],
            bedroom: "3",
			sqft: "1544",
			bath: "3",
			description:"Explore comfort and space in this charming 1544 sqft, 3 bed 3 bath home in Stone Mountain, GA, offered at $322,000. Embrace cozy living with ample room, modern amenities, and a desirable location, creating an ideal haven for your family's lifestyle."
        };
    }
	
    document.getElementById('propertyDetails').innerHTML = `
        <h2>${propertyDetails.title}</h2>
        <p><strong>Location:</strong> ${propertyDetails.location}</p>
        <p><strong>Price:</strong> ${propertyDetails.price}</p>
		<p><strong>Sq Ft:</strong> ${propertyDetails.sqft}</p>
        <p><strong>Bedrooms:</strong> ${propertyDetails.bedroom}</p>
		<p><strong>Bathrooms:</strong> ${propertyDetails.bath}</p>
		<p><strong>Description:</strong> ${propertyDetails.description}</p>

        <div id="propertyImageContainer" class="image-container">
            ${propertyDetails.images
                .map(
                    image =>
                        `<img src="${image}" alt="Property Image" class="property-image">`
                )
                .join('')}
        </div>
        
    `;

    const propertyModal = document.getElementById('propertyModal');
    propertyModal.style.display = 'block';

    const imageContainer = document.getElementById('propertyImageContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let scrollPosition = 0;

    function scrollPropertyImages(direction) 
	{
		const imageList = document.querySelectorAll('.property-image');
        const containerWidth = imageContainer.offsetWidth;
        const totalWidth = imageList.length * imageList[0].offsetWidth;
        const scrollDistance = containerWidth / 2;

        if (direction === -1 && scrollPosition > 0) 
		{
            scrollPosition -= scrollDistance;
        } else if (direction === 1 && scrollPosition < totalWidth - containerWidth) 
		{
            scrollPosition += scrollDistance;
        }

        imageContainer.scrollTo
		({
            left: scrollPosition,
            behavior: 'smooth',
        });
    }

    imageContainer.addEventListener('scroll', () => 
	{
        const imageList = document.querySelectorAll('.property-image');
        const containerWidth = imageContainer.offsetWidth;
        const totalWidth = imageList.length * imageList[0].offsetWidth;

        if (scrollPosition <= 0) 
		{
            prevBtn.style.display = 'none';
        } else 
		{
            prevBtn.style.display = 'block';
        }

        if (scrollPosition >= totalWidth - containerWidth) 
		{
            nextBtn.style.display = 'none';
        } else 
		{
            nextBtn.style.display = 'block';
        }
    });

    imageContainer.dispatchEvent(new Event('scroll'));
}

function closeModal() 
{
    document.getElementById('propertyModal').style.display = 'none';
}

function addToWishlist(propertyId) 
{
    let propertyDetails = getPropertyDetailsById(propertyId);

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    let propertyExists = wishlist.some(item => item.propertyId === propertyId);

    if (!propertyExists) 
	{
        wishlist.push(
		{
            propertyId: propertyId,
            details: propertyDetails
        });

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert('Property added to wishlist!');
    } 
	else 
	{
        alert('Property already exists in the wishlist!');
    }
}
function getPropertyDetailsById(propertyId) 
{
    let propertyDetails = {};

    if (propertyId === 'propertyId1') 
	{
        propertyDetails = 
		{
            title: "Home in Alpharetta",
            location: "4025 Dover Ave, Alpharetta, GA 30009",
            price: "$664,990",
            images: ["propertyimages/1/ex.webp", "propertyimages/1/2.webp", "propertyimages/1/3.webp", "propertyimages/1/4.webp", "propertyimages/1/5.webp", "propertyimages/1/6.webp", "propertyimages/1/7.webp"],
			bedroom:"4",
			bath:"3",
			sqft:"2129",
			description:"Presenting a stunning 2129 sq ft, 4 bed 3 bath home in Alpharetta for $664,990. This meticulously crafted residence boasts spacious living areas, elegant bedrooms, and modern amenities, providing an ideal haven for luxurious family living in a sought-after community."	
        };
    }
	
    else if (propertyId === 'propertyId2') 
	{
        propertyDetails = 
		{
            title: "Home in Lilburn",
            location: "1275 Killian Shoals Way SW, Lilburn, GA 30047",
            price: "$640,000",
            images: ["propertyimages/2/ex.webp", "propertyimages/2/2.webp", "propertyimages/2/3.webp", "propertyimages/2/4.webp", "propertyimages/2/5.webp", "propertyimages/2/6.webp", "propertyimages/2/7.webp"],
			bedroom:"5",
			bath:"4",
			sqft:"2870",
			description:"Introducing a remarkable 2129 sq ft, 5 bed 4 bath home in Lilburn, GA, priced at $664,000. This exceptional property features a sauna, gym, and spacious living areas, offering a perfect blend of luxury and functionality for an elevated lifestyle."
        };
    }
	
	else if (propertyId === 'propertyId3') 
	{
        propertyDetails = 
		{
            title: "House in Atlanta",
            location: "604 Julian St NW, Atlanta, GA 30318",
            price: "$499,900",
            images: ["propertyimages/3/ex.webp", "propertyimages/3/2.webp", "propertyimages/3/3.webp", "propertyimages/3/4.webp", "propertyimages/3/5.webp", "propertyimages/3/6.webp"],
            bedroom: "4",
			sqft: "1344",
			bath: "3",
			description: "Discover urban sophistication in this 1344 sq ft modern home in Atlanta. Featuring 4 beds and 3 baths, this residence embodies sleek design, offering a perfect blend of comfort and style for metropolitan living at its finest."
        };
    }
	
	
	else if (propertyId === 'propertyId4') 
	{
        propertyDetails = 
		{
            title: "Modern Home in Atlanta",
            location: "1058 W Ave Sw, Atlanta, GA 30315",
            price: "$449,900",
            images: ["propertyimages/4/ex.webp", "propertyimages/4/2.webp", "propertyimages/4/3.webp", "propertyimages/4/4.webp", "propertyimages/4/5.webp", "propertyimages/4/6.webp"],
            bedroom: "3",
			sqft: "1484",
			bath: "3",
			description: "Experience contemporary living in this 1824 sq ft modern abode, ideally situated just outside downtown Atlanta. Boasting sleek design elements, spacious interiors, and seamless indoor-outdoor flow, this home offers an urban oasis for sophisticated living near the vibrant cityscape."
        };
    }
	
	else if (propertyId === 'propertyId5') 
	{
        propertyDetails = 
		{
            title: "Home in Johns Creek",
            location: "340 Falls Point Trl, Johns Creek, GA 30022",
            price: "$1,175,000",
            images: ["propertyimages/5/ex.webp", "propertyimages/5/2.webp", "propertyimages/5/3.webp", "propertyimages/5/4.webp", "propertyimages/5/5.webp", "propertyimages/5/6.webp", "propertyimages/5/7.webp"],
            bedroom: "5",
			sqft: "5954",
			bath: "6",
			description:""
        };
    }
	
	else if (propertyId === 'propertyId6') 
	{
        propertyDetails = 
		{
            title: "Pool House in Johns Creek",
            location: "9890 Autry Falls Dr, Johns Creek, GA 30022",
            price: "$1,350,900",
            images: ["propertyimages/6/ex.webp", "propertyimages/6/2.webp", "propertyimages/6/3.webp", "propertyimages/6/4.webp", "propertyimages/6/5.webp", "propertyimages/6/6.webp", "propertyimages/6/7.webp"],
            bedroom: "6",
			sqft: "6896",
			bath: "5",
			description:"Nestled in Johns Creek, GA, discover luxury living in this 6896 sq ft, 6 bed 5 bath home, complete with a refreshing pool oasis. Priced at $1,350,000, this exquisite residence offers generous spaces, elegant bedrooms, and resort-style amenities, perfect for sophisticated entertainment and relaxation."

        };
    }
	
	else if (propertyId === 'propertyId7') 
	{
        propertyDetails = 
		{
            title: "Condo in Atlanta",
            location: "250 Park Avenue West NW #NW-709-709, Atlanta, GA 30313",
            price: "$385,900",
            images: ["propertyimages/7/ex.webp", "propertyimages/7/2.webp", "propertyimages/7/3.webp", "propertyimages/7/4.webp", "propertyimages/7/5.webp", "propertyimages/7/6.webp", "propertyimages/7/7.webp"],
            bedroom: "1",
			sqft: "1202",
			bath: "1",
			description:"Embrace urban living in this 1202 sq ft downtown Atlanta condo, featuring 1 bed and 1 bath. Enjoy modern design, panoramic city views, and a vibrant location close to amenities, offering a stylish and convenient metropolitan lifestyle at its finest."
        };
    }
	
	else if (propertyId === 'propertyId8') 
	{
        propertyDetails = 
		{
            title: "Apartment for Rent",
            location: "99 Centennial Olympic Park Dr, Atlanta, GA 30313",
            price: "$1,360/month",
            images: ["propertyimages/8/ex.webp", "propertyimages/8/2.webp", "propertyimages/8/3.webp", "propertyimages/8/4.webp", "propertyimages/8/5.webp", "propertyimages/8/6.webp", "propertyimages/8/7.webp"],
            bedroom: "1",
			sqft: "382",
			bath: "1",
			description:"Discover city living in this stylish 382 sqft studio apartment for rent in downtown Atlanta. Boasting a compact yet functional space, this residence offers modern amenities, convenience, and proximity to urban attractions, perfect for those seeking a vibrant city lifestyle."
        };
    }
	
	else if (propertyId === 'propertyId9') 
	{
        propertyDetails = {
            title: "Home in Decatur",
            location: "3661 Hofstra Ct, Decatur, GA 30034",
            price: "$399,000",
            images: ["propertyimages/9/ex.webp", "propertyimages/9/2.webp", "propertyimages/9/3.webp", "propertyimages/9/4.webp", "propertyimages/9/5.webp", "propertyimages/9/6.webp", "propertyimages/9/7.webp"],
            bedroom: "5",
			sqft: "2584",
			bath: "4",
			description:"Explore comfort and space in this inviting 2584 sqft Decatur, GA home featuring 5 beds and 4 baths. Embrace modern living with ample room, versatile living areas, and a serene neighborhood, offering a perfect blend of convenience and tranquility."
			
        };
    }
	
	else if (propertyId === 'propertyId10') 
	{
        propertyDetails = 
		{
            title: "Home in Stone Mountain",
            location: "5575 Boggs Dr, Stone Mountain, GA 30087",
            price: "$322,900",
            images: ["propertyimages/10/ex.webp", "propertyimages/10/2.webp", "propertyimages/10/3.webp", "propertyimages/10/4.webp", "propertyimages/10/5.webp", "propertyimages/10/6.webp", "propertyimages/10/7.webp"],
            bedroom: "3",
			sqft: "1544",
			bath: "3",
			description:"Explore comfort and space in this charming 1544 sqft, 3 bed 3 bath home in Stone Mountain, GA, offered at $322,000. Embrace cozy living with ample room, modern amenities, and a desirable location, creating an ideal haven for your family's lifestyle."
        };
    }
    return propertyDetails;
}

window.onclick = function(event) 
{
    const modal = document.getElementById('propertyModal');
    if (event.target === modal) 
	{
        modal.style.display = "none";
    }
};

