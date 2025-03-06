// Write your solution in this file!
// Declare customerName in global scope
var customerName = "bob";

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Declare bestCustomer without assigning a value
var bestCustomer;

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = "not bob";
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "someone";

// Function that tries (and fails) to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "another person"; // This should cause an error
}

// Export functions for testing
module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer,
};

