CREATE TABLE college_reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  college_name VARCHAR(255) NOT NULL,
  review_text TEXT NOT NULL,
  rating INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO college_reviews (college_name, review_text, rating) VALUES ('collegeName', 'reviewText', rating);
