// JavaScript to handle form submission
document.getElementById("college-review-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent the form from submitting
    
    // Get the form data
    var collegeName = document.getElementById("college-name").value;
    var reviewText = document.getElementById("review-text").value;
    var rating = document.getElementById("rating").value;
    
    // Validate the form data
    if (!collegeName || !reviewText || !rating) {
      alert("Please fill out all the fields in the form");
      return;
    }
    
    // Process the form data
    // ... (AJAX call, database insertion, etc.)
    
    // Display a message to the user
    alert("Thank you for your review of " + collegeName + "!");
    
    // Clear the form
    document.getElementById("college-review-form").reset();
  });
  