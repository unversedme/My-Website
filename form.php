

<!-- 
<?php

// Connect to the database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "dbname";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$college_name = $_POST['college_name'];
$review_text = $_POST['review_text'];
$rating = $_POST['rating'];

// Validate the form data
if (empty($college_name) || empty($review_text) || empty($rating)) {
    echo "Please fill out all fields.";
    exit;
}

// Insert the data into the database
$sql = "INSERT INTO college_reviews (college_name, review_text, rating) VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssi", $college_name, $review_text, $rating);

if ($stmt->execute()) {
    echo "Review submitted successfully!";
} else {
    echo "Error: " . $conn->error;
}

$stmt->close();
$conn->close(); -->
