"use strict";

let currentUser;

/** Handle login form submission. */
async function login(evt) {
  console.debug("login", evt);
  evt.preventDefault();

  const username = $("#login-username").val();
  const password = $("#login-password").val();

  currentUser = await User.login(username, password);
  
  if (currentUser) {
    alert("Login successful!");
    $loginForm.trigger("reset");
    saveUserCredentialsInLocalStorage();
    updateUIOnUserLogin();
  } else {
    alert("Login failed. Please check your credentials.");
  }
}

$loginForm.on("submit", login);

/** Handle signup form submission. */
async function signup(evt) {
  console.debug("signup", evt);
  evt.preventDefault();

  const name = $("#signup-name").val();
  const username = $("#signup-username").val();
  const password = $("#signup-password").val();

  currentUser = await User.signup(username, password, name);

  if (currentUser) {
    alert("Signup successful! You are now logged in.");
    $signupForm.trigger("reset");
    saveUserCredentialsInLocalStorage();
    updateUIOnUserLogin();
  } else {
    alert("Signup failed. Please try again.");
  }
}

$signupForm.on("submit", signup);

/** Handle logout. */
function logout() {
  console.debug("logout");
  currentUser = null;
  localStorage.clear();
  alert("You have logged out.");
  location.reload(); // Refresh the page
}

$navLogOut.on("click", logout);

/** Check for remembered user and log them in. */
function checkForRememberedUser() {
  console.debug("checkForRememberedUser");

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  if (token && username) {
    currentUser = User.loginWithToken(token, username);
    updateUIOnUserLogin();
  }
}

function saveUserCredentialsInLocalStorage() {
  console.debug("saveUserCredentialsInLocalStorage");
  localStorage.setItem("token", currentUser.loginToken);
  localStorage.setItem("username", currentUser.username);
}

/** Update UI after user login/signup */
function updateUIOnUserLogin() {
  console.debug("updateUIOnUserLogin");
  updateNavOnLogin();
  putStoriesOnPage();
}
