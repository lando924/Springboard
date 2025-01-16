"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */
function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** When a user first logs in, update the navbar to reflect that. */
function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").css('display', 'flex');
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

// Show story submit form on clicking story "submit"
function navSubmitClick(evt) {
  console.debug("navSubmitClick", evt);
  if (!currentUser) {
    alert('Please login first.');
    return;
  }

  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show(); // Show form to submit new stories
}

$navSubmit.on('click', navSubmitClick);

// Show favorite stories on click on "favorites"
function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  putFavoritesListOnPage();
}

$body.on("click", "#nav-favorites", navFavoritesClick);

// Show My Stories on clicking "my stories"
function navMyStories(evt) {
  console.debug("navMyStories", evt);
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show();  // Ensure the "my stories" section is shown
}

$body.on("click", "#nav-my-stories", navMyStories);

// Handles click on 'login' in navbar
function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show(); // Show login form
  $signupForm.show(); // Show signup form
}

$navLogin.on("click", navLoginClick);

// Hide everything but profile on click on 'profile'
function navProfileClick(evt) {
  console.debug("navProfileClick", evt);
  hidePageComponents();
  $userProfile.show(); // Show the user profile section
}

$navUserProfile.on("click", navProfileClick);
