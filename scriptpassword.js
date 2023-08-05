
function handlePasswordRecovery() {
  var email = document.getElementById("recovery_email").value;
  var storedEmail = localStorage.getItem("userEmail");
  var storedPassword = localStorage.getItem("userPassword");
  var storedName = localStorage.getItem("userName")

  if (email === storedEmail) {
    // recover user password
     document.querySelector(".wrap").style.display = "block";
     document.getElementById("success").innerHTML = storedName + " Your password is: " + storedPassword;
    return false;
  } else {
    document.querySelector(".wrap-out").style.display = "block";
    document.getElementById("invalid").innerHTML = "Invalid email address";
    return false;
  }
}


function nextPage(){

  window.location.href = "page2.html"
}

function closePage() {

  window.location.href = "password.html";
}