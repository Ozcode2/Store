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

window.addEventListener("load", function () {
  var cartCounter = document.getElementById("cartCounterOnion");
  var count = localStorage.getItem("OnionCartCount");
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (count && loggedInUser) {
    cartCounter.innerText = count;
  }

  var ProductCost = document.getElementById("price");
  var totalProductCost = localStorage.getItem("productCostOnion");
  if (totalProductCost && loggedInUser) {
    ProductCost.style.display = "block";
    ProductCost.innerText = totalProductCost;
  }

  updateTotalCount();
});

window.addEventListener("load", function () {
  var cartCounter = document.getElementById("cartCounterOnion");
  var count = localStorage.getItem("onionCartCount");
  var loggedInUser = localStorage.getItem("loggedInUser");
  if (count && loggedInUser) {
    cartCounter.innerText = count;
  }

  var ProductCostOnion = document.getElementById("price");
  var totalProductCost = localStorage.getItem("productCostOnion");
  if (totalProductCost && loggedInUser) {
    ProductCostOnion.style.display = "block";
    ProductCostOnion.innerText = totalProductCost;
  }
  updateTotalCount();
});


document.addEventListener("DOMContentLoaded", function () {
  // Load cart counts from local storage
  var pepperCartCount = localStorage.getItem("pepperCartCount");
  var tomatoCartCount = localStorage.getItem("tomatoCartCount");
  var springCartCount = localStorage.getItem("springCartCount");
  var eggCartCount = localStorage.getItem("eggCartCount");
  var beansCartCount = localStorage.getItem("beansCartCount");
  var onionCartCount = localStorage.getItem("onionCartCount");
  var getUserName = localStorage.getItem("loggedInUser", getUserName);

  // Set initial cart counts
  document.getElementById("cartCounterOnion").innerText =
    onionCartCount !== null ? onionCartCount : "0";
  document.getElementById("totalCounter").innerText = calculateTotalCount(
    tomatoCartCount,
    pepperCartCount,
    springCartCount,
    eggCartCount,
    beansCartCount,
    onionCartCount
  );
});


document.getElementById("clickOnion").addEventListener("click", function () {
  var cartElement = document.getElementById("cartOnion");
  var addToCartText = document.getElementById("clickOnion").innerText;
  cartElement.parentNode.removeChild(cartElement);
  document.getElementById("clickOnion").innerText = "";
  var getUserName = localStorage.getItem("loggedInUser", getUserName);
  var ProductCostOnion = document.getElementById("price");
  var onionProduct = document.getElementById("onion");

  var incrementButton = document.createElement("button");
  incrementButton.classList.add("button", "button-green");
  incrementButton.innerHTML = "+";
  incrementButton.addEventListener("click", function () {
    var cartCounter = document.getElementById("cartCounterOnion");
    var count = parseInt(cartCounter.innerText);
    if (onionProduct && count >= 0 && getUserName) {
      count += 1;
      cartCounter.innerText = count;
      localStorage.setItem("onionCartCount", count);

      ProductCostOnion.style.display = "block";
      var currentCost = parseInt(ProductCostOnion.innerText.replace(/[^0-9.-]+/g, ""));
      var newCost = currentCost + 280;
      ProductCostOnion.innerText = "cost: ₦ " + newCost.toLocaleString();
      localStorage.setItem("productCostOnion", ProductCostOnion.innerText);

      updateTotalCount();
    }
  });
  document.getElementById("clickOnion").appendChild(incrementButton);

  var decrementButton = document.createElement("button");
  decrementButton.classList.add("button", "button-red");
  decrementButton.innerHTML = "-";
  decrementButton.addEventListener("click", function () {
    var cartCounter = document.getElementById("cartCounterOnion");
    var count = parseInt(cartCounter.innerText);
    if (onionProduct && count > 0 && getUserName) {
      count--;
      cartCounter.innerText = count;
      localStorage.setItem("onionCartCount", count);

      ProductCostOnion.style.display = "block";
      var currentCost = parseInt(ProductCostOnion.innerText.replace(/[^0-9.-]+/g, ""));
      var newCost = currentCost - 280;
      ProductCostOnion.innerText = "cost: ₦ " + newCost.toLocaleString();
      localStorage.setItem("productCostOnion", ProductCostOnion.innerText);

      updateTotalCount();
    }
  });
  document.getElementById("clickOnion").appendChild(decrementButton);
});

function updateTotalCount() {
  var pepperCartCount = localStorage.getItem("pepperCartCount");
  var tomatoCartCount = localStorage.getItem("tomatoCartCount");
  var springCartCount = localStorage.getItem("springCartCount");
  var eggCartCount = localStorage.getItem("eggCartCount");
  var onionCartCount = localStorage.getItem("onionCartCount");
  var beansCartCount = localStorage.getItem("beansCartCount");

  document.getElementById("totalCounter").innerText = calculateTotalCount(
    tomatoCartCount,
    pepperCartCount,
    springCartCount,
    eggCartCount,
    beansCartCount,
    onionCartCount
  );
}

function calculateTotalCount(
  tomatoCount,
  pepperCount,
  springCount,
  onionCount,
  eggCount,
  beansCount
) {
  tomatoCount = tomatoCount !== null ? parseInt(tomatoCount) : 0;
  pepperCount = pepperCount !== null ? parseInt(pepperCount) : 0;
  springCount = springCount !== null ? parseInt(springCount) : 0;
  onionCount = onionCount !== null ? parseInt(onionCount) : 0;
  eggCount = eggCount !== null ? parseInt(eggCount) : 0;
  beansCount = beansCount !== null ? parseInt(beansCount) : 0;

  tomatoCount = !isNaN(tomatoCount) ? tomatoCount : 0;
  pepperCount = !isNaN(pepperCount) ? pepperCount : 0;
  springCount = !isNaN(springCount) ? springCount : 0;
  onionCount = !isNaN(onionCount) ? onionCount : 0;
  eggCount = !isNaN(eggCount) ? eggCount : 0;
  beansCount = !isNaN(beansCount) ? beansCount : 0;
  return (
    tomatoCount + pepperCount + springCount + beansCount + eggCount + onionCount
  );
}