// Create variables for the welcome message
var greet = 'Hello';
var username = 'Jackie';
var message = 'here is your order:';
// Concatenate the three variables above to create the welcome message
var welcome =  greet +' '+ username + ', '+ message;

// // Create variables to hold details about the sign
var sign = 'Welcome Home';
var tiles = sign.length;
var subTotal = 5 * tiles; //$5 for each tile
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
const greeting = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
greeting.innerHTML = welcome;

// Get the element that has an id of userSign then update its contents
const userSign = document.getElementById('userSign');
userSign.innerHTML = sign;


// Get the element that has an id of tiles then update its contents
const tilesElement = document.getElementById('tiles');
tilesElement.innerHTML = tiles;


// Get the element that has an id of subTotal then update its contents
const subTotalElement = document.getElementById('subTotal');
subTotalElement.innerHTML += subTotal;


// Get the element that has an id of shipping then update its contents
const shippingElement = document.getElementById('shipping');
shippingElement.innerHTML += shipping;


// Get the element that has an id of grandTotal then update its contents
const grandTotalElement = document.getElementById('grandTotal');
grandTotalElement.innerHTML += grandTotal;