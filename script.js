// ! ! !
// JavaScript Rascal
// See the README.md for more details
// ! ! !


// Array of products
const products = [
	{
		name: 'Chicken Harness and Leash',
		image: './images/chicken-harness.jpg',
		price: 35.00,
		avgReview: 1.8,
		yearPosted: 2009
	},
	{
		name: 'Baguette Pillow',
		image: './images/baguette-pillow.jpg',
		price: 30.00,
		avgReview: 4.7,
		yearPosted: 2019
	},
	{
		name: 'The Hen Bag Handbag',
		image: './images/hen-bag.jpg',
		price: 33.00,
		avgReview: 4.6,
		yearPosted: 2023
	},
	{
		name: 'Umbrella Hat',
		image: './images/umbrella-hat.jpg',
		price: 9.00,
		avgReview: 2.3,
		yearPosted: 1999
	}
];

$(document).ready(onReady);

function onReady() {
	// Run the function to calculate product discounts
	calculateProductDiscounts(products);
}

// Takes in an array of products objects, calculates the
// discount for each product, and renders the results to the DOM.
function calculateProductDiscounts(arrayOfProducts) {
	// Loop through the array of products
	for (let i = 0; i < arrayOfProducts.length; i++) {
		const product = arrayOfProducts[i];

		// Calculate the discount for this product
		const discount = calculateDiscount(product);

		// Render the product and discount to the DOM
		renderProduct(product, discount);
	}
}

// Calculate the discount for a product, 
// based on the average review, the year it was posted, and the price
function calculateDiscount(product) {
	// Get a discount percentage, based on the product review
	let reviewDiscount = getReviewDiscount(product.avgReview); 
	
	// Get a discount percentage, based on the year the product was posted
	let yearAdjustment = getYearAdjustment(product.yearPosted);

	// Get a discount percentage, based on the product price
	let priceAdjustment = getPriceAdjustment(product.price);

	// Add all the discount percentages up, to get a total discount percentage
	let discountPercent = reviewDiscount + yearAdjustment + priceAdjustment;

	// The discount cannot be more than 25%, or less that 0%
	if (discountPercent > 0.25) {
		discountPercent = 0.25;
	} else if (discountPercent < 0) {
		discountPercent = 0;
	}

	// Convert the percentage to an actual dollar amount
	let discountAmount = product.price * discountPercent;

	return discountAmount;
}

// We'll give a bigger discount for lower rated products
function getReviewDiscount(rating) {
	if (rating > 4.8) {
		return 0.05;
	}
	else if (rating > 4.0) {
		return 0.10;
	}
	else if (rating > 3.5) {
		return 0.15;
	}
	else {
		return 0.20;
	}
}

// Old products get an extra 10% discount
function getYearAdjustment(yearPosted) {
	if (yearPosted < 2010) {
		return 0.10;
	}
	return 0;
}

// Expensive products get an extra 8% discount
function getPriceAdjustment(price) {
	if (price > 30) {
		return 0.08;
	}
	return 0;
}

// Render a <tr> element to the DOM for a product
// NOTE: NO BUGS IN THIS FUNCTION!
function renderProduct(product, discount) {
	$('#content').append(`
		<tr>
			<td><img src="${product.image}" width=100/></td>
			<td>${product.name}</td>
			<td>${product.yearPosted}</td>
			<td>$${product.price.toFixed(2)}</td>
			<td>${product.avgReview}</td>
			<td>$${discount.toFixed(2)}</td>
		</li>
	`);
}
