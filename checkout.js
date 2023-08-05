var loggedInUser = localStorage.getItem("loggedInUser");
var userGreeting = document.getElementById("userGreeting");

// Update the element with the user's name
function updateUserGreeting() {
  if (loggedInUser) {
    userGreeting.innerHTML = "Hi, " + loggedInUser + "!";
  } else {
    userGreeting.innerHTML = "Hi!";
  }
}

updateUserGreeting();

function toggleContainer() {
  var container = document.getElementById("pop-up");
  if (container.style.display === "none") {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}

// Get the close button element
var closeButton = document.querySelector(".close");

// Add a click event listener to the close button
closeButton.addEventListener("click", function () {
  // Hide the pop-up by setting its display property to 'none'
  var popUp = document.querySelector("#pop-up");
  popUp.style.display = "none";
});

// Assuming you have the user's address stored in a variable called "userAddress"
var getaddress = localStorage.getItem("userAddress");
var loggedInUser = localStorage.getItem("loggedInUser");
var getAddress = document.getElementById("address");

// Update the element with the user's name
function updateUser() {
  if (loggedInUser) {
    getAddress.innerHTML = "Address: " + getaddress;
  } else {
    getAddress.innerHTML = "Address:";
  }
}

updateUser();



