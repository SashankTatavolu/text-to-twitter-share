// Add event listener to the article to detect selection
const article = document.getElementById("article");
article.addEventListener("mouseup", function (event) {
  const selectedText = window.getSelection().toString().trim();
  console.log("Selected Text: ", selectedText);
  if (selectedText !== "") {
    createTwitterMenu(selectedText);
  }
});

// Define a function to create the custom Twitter sharing menu
function createTwitterMenu(selectedText) {
  console.log("createTwitterMenu called with Selected Text: ", selectedText);

  const twitterMenu = document.createElement("div");
  twitterMenu.classList.add("twitter-menu");
  twitterMenu.innerHTML = `
    <button class="twitter-share-button" onClick="shareOnTwitter()">Share on Twitter</button>
  `;

  // Remove any existing menu before adding a new one
  const existingMenu = document.querySelector(".twitter-menu");
  if (existingMenu) {
    existingMenu.remove();
  }

  document.body.appendChild(twitterMenu);

  // Position the menu next to the selected text
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    twitterMenu.style.top = `${rect.top + window.pageYOffset - twitterMenu.offsetHeight - 5}px`;
    twitterMenu.style.left = `${rect.left + window.pageXOffset - (twitterMenu.offsetWidth / 2) + (rect.width / 2)}px`;
  }
}

// Define a function to share the selected text on Twitter
function shareOnTwitter() {
  const selectedText = window.getSelection().toString();
  const tweetText = encodeURIComponent(selectedText);

  // Replace 'YOUR_TWITTER_USERNAME' with your actual Twitter username
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&via=SashankTatavolu`;

  // Open the Twitter sharing window
  window.open(tweetUrl, "_blank");

  // Remove the custom Twitter menu
  const twitterMenu = document.querySelector(".twitter-menu");
  twitterMenu.remove();
}
