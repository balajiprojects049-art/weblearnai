-- Create contact_submissions table in Neon PostgreSQL
-- Run this SQL in your Neon database SQL Editor

CREATE TABLE IF NOT EXISTS contact_submissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    topic_interest VARCHAR(255) NOT NULL,
    student_status VARCHAR(100),
    student_details VARCHAR(100),
    experience_years VARCHAR(50),
    graduated_details VARCHAR(50),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX idx_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_email ON contact_submissions(email);

-- Verify table was created
SELECT * FROM contact_submissions LIMIT 1;
