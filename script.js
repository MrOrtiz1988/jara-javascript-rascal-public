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
		numberOfReviews: 205,
		yearPosted: 2009
	},
	{
		name: 'Baguette Pillow',
		image: './images/baguette-pillow.jpg',
		price: 30.00,
		avgReview: 4.7,
		numberOfReviews: 4300,
		yearPosted: 2019
	},
	{
		name: 'The Hen Bag Handbag',
		image: './images/hen-bag.jpg',
		price: 33.00,
		avgReview: 4.6,
		numberOfReviews: 2300,
		yearPosted: 2023
	},
	{
		name: 'Umbrella Hat',
		image: './images/umbrella-hat.jpg',
		price: 9.00,
		avgReview: 2.3,
		numberOfReviews: 83,
		yearPosted: 1999
	}
];

$(document).ready(onReady);

function onReady() {
	// Run the function to calculate product discounts
	calculateProductDiscounts(products);
}

// Takes in an array of employee objects, calculates the
// bonus for each employee and outputs the results to the DOM.
function calculateProductDiscounts(arrayOfProducts) {
	// Loop the array, extracting each array and writing information to the DOM
	for (let i = 0; i < arrayOfProducts.length; i++) {
		const product = arrayOfProducts[i];

		const discount = calculateDiscount(product);

		appendProductToDom(product, discount);
	}
}

// Gather all the bonus information for an employee
function calculateDiscount(product) {
	let baseDiscount = getBaseDiscount(product.avgReview); 
	let yearAdjustment = getYearAdjustment(product.yearPosted);
	let priceAdjustment = getPriceAdjustment(product.price);


	let discountPercent = baseDiscount + yearAdjustment + priceAdjustment;

	if (discountPercent > 0.25) {
		discountPercent = 0.25;
	} else if (discountPercent < 0) {
		discountPercent = 0;
	}
	let discountAmount = product.price * discountPercent; // Annual is a funny looking word. Who needs it?
	return discountAmount;
}

// Get the base bonus for the employee
function getBaseDiscount(rating) {
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

// Adjust based on the employee number.
function getYearAdjustment(yearPosted) {
	if (yearPosted < 2010) {
		// An extra 10% off for products from before 2010
		return 0.10;
	}
	return 0;
}

// Adjust bonus for employees making more than 65K
function getPriceAdjustment(price) {
	if (price > 30) {
		return 0.08;
	}
	return 0;
}

// Append the employee text to the DOM
// NOTE: NO BUGS IN THIS FUNCTION!
function appendProductToDom(product, discount) {
	// Create a new list item
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
