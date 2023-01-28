// for seach bar

const searchBtn = document.getElementById("submit-btn");
const searchInput = document.getElementById("search");

searchBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const searchTerm = searchInput.value;
  console.log(`Searching for: ${searchTerm}`);
});



// comment section script
const form = document.getElementById("comment-form");
const commentsContainer = document.getElementById("comments");

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;

  if (!name || !email || !comment) {
    alert("All fields are required!");
    return;
  }

  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");
  commentDiv.innerHTML = `
    <p><strong>${name}</strong> <em>(${email})</em> said:</p>
    <p>${comment}</p>
  `;

  commentsContainer.appendChild(commentDiv);

  form.reset();
});



const readMoreButtons = document.querySelectorAll(".posts li a");

// Add a click event listener to each read more button

readMoreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Show an alert when the button is clicked
  
      alert("Reading more is not yet implemented");
    });
  });

  // Get the navigation links

var navLinks = document.querySelectorAll("nav a");

// Add an event listener to each link

navLinks.forEach(function(link) {

  link.addEventListener("click", function(event) {

    event.preventDefault();

    // Get the id of the section to scroll to

    var sectionId = this.getAttribute("href");

    // Get the section element

    var section = document.querySelector(sectionId);

    // Scroll to the section

    section.scrollIntoView({ behavior: "smooth" });

  });

});

// Get the news sections

var newsSections = document.querySelectorAll(".news-section");

// Add a click event listener to each section

newsSections.forEach(function(section) {

  section.addEventListener("click", function() {

    // Toggle the "active" class on the section

    this.classList.toggle("active");

  });

});

// like dislike comment section
// Get the review buttons

var likeButtons = document.querySelectorAll(".like-button");

var dislikeButtons = document.querySelectorAll(".dislike-button");

// Add click event listeners to the buttons

likeButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    // Add code to handle a like

  });

});

dislikeButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    // Add code to handle a dislike

  });

});

// blog section

// Get the blog section container

var blogContainer = document.getElementById("blog");

// Add an event listener to the blog container to listen for click events

blogContainer.addEventListener("click", function (event) {
  // Check if the clicked element is a post title

  if (event.target.tagName === "H3") {
    // Get the parent list item of the clicked post title

    var postContainer = event.target.parentNode;

    // Toggle the class "expanded" on the post container

    postContainer.classList.toggle("expanded");
  }
});

// Get the form and submit button

// Add a submit event listener to the form

// Get the review input

// Get the review text

// Clear the input

// var form = document.querySelector("form");

// var submitButton = document.querySelector(".submit-button");



// form.addEventListener("submit", function(event) {

//   event.preventDefault();

  

//   var reviewInput = document.querySelector(".review-input");

  

//   var reviewText = reviewInput.value;

  

//   reviewInput.value = "";

  

// });

