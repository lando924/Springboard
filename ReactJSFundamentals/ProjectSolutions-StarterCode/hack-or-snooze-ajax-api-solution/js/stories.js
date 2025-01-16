"use strict";

let storyList;

/** Get and show stories when site first loads. */
async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/** Render HTML for an individual Story instance */
function generateStoryMarkup(story, showDeleteBtn = false) {
  console.debug("generateStoryMarkup", story);
  
  const hostName = story.getHostName();
  const showStar = Boolean(currentUser);

  return $(`
    <li id="${story.storyId}">
      <div>
        ${showDeleteBtn ? getDeleteBtnHTML() : ""}
        ${showStar ? getStarHTML(story) : ""}
        <a href="${story.url}" target="_blank" class="story-link">
          ${story.title}
        </a>
        <small class="story-hostname">(${hostName})</small>
        <div class="story-author">by ${story.author}</div>
        <div class="story-user">posted by ${story.username}</div>
      </div>
    </li>
  `);
}

/** Make delete button HTML for story */
function getDeleteBtnHTML() {
  return `
    <span class="trash-can">
      <i class="fas fa-trash-alt"></i>
    </span>`;
}

/** Make favorite/not-favorite star for story */
function getStarHTML(story) {
  const isFavorite = currentUser.isFavorite(story);
  const starType = isFavorite ? "fas" : "far";
  return `
    <span class="star">
      <i class="${starType} fa-star"></i>
    </span>`;
}

/** Put stories on the page */
function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

/** Handle submitting new story form. */
async function submitNewStory(evt) {
  console.debug("submitNewStory", evt);
  evt.preventDefault();

  const title = $("#create-title").val();
  const url = $("#create-url").val();
  const author = $("#create-author").val();
  const username = currentUser.username;
  const storyData = { title, url, author, username };

  const story = await storyList.addStory(currentUser, storyData);
  const $story = generateStoryMarkup(story);
  $allStoriesList.prepend($story);

  // Provide feedback to the user
  alert("Story submitted successfully!");

  $submitForm.slideUp("slow");
  $submitForm.trigger("reset");
}

$submitForm.on("submit", submitNewStory);

/** Handle deleting a story. */
async function deleteStory(evt) {
  console.debug("deleteStory");
  
  const $closestLi = $(evt.target).closest("li");
  const storyId = $closestLi.attr("id");

  await storyList.removeStory(currentUser, storyId);
  
  // Provide feedback to the user
  alert("Story deleted successfully!");

  // Re-generate story list after deletion
  putUserStoriesOnPage();
}

$ownStories.on("click", ".trash-can", deleteStory);

/** Functionality for user's own stories */
function putUserStoriesOnPage() {
  console.debug("putUserStoriesOnPage");

  $ownStories.empty();

  if (currentUser.ownStories.length === 0) {
    $ownStories.append("<h5>No stories added by user yet!</h5>");
  } else {
    for (let story of currentUser.ownStories) {
      const $story = generateStoryMarkup(story, true);
      $ownStories.append($story);
    }
  }

  $ownStories.show();
}

/** Functionality for favorites list */
function putFavoritesListOnPage() {
  console.debug("putFavoritesListOnPage");

  $favoritedStories.empty();

  if (currentUser.favorites.length === 0) {
    $favoritedStories.append("<h5>No favorites added!</h5>");
  } else {
    for (let story of currentUser.favorites) {
      const $story = generateStoryMarkup(story);
      $favoritedStories.append($story);
    }
  }

  $favoritedStories.show();
}

/** Handle favorite/un-favorite a story */
async function toggleStoryFavorite(evt) {
  console.debug("toggleStoryFavorite");

  const $tgt = $(evt.target);
  const $closestLi = $tgt.closest("li");
  const storyId = $closestLi.attr("id");
  const story = storyList.stories.find(s => s.storyId === storyId);

  if ($tgt.hasClass("fas")) {
    await currentUser.removeFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
    alert("Removed from favorites!");
  } else {
    await currentUser.addFavorite(story);
    $tgt.closest("i").toggleClass("fas far");
    alert("Added to favorites!");
  }
}

$storiesLists.on("click", ".star", toggleStoryFavorite);
