CREATE TABLE users_profiles (
    id SERIAL PRIMARY KEY,  -- Unique ID for each user
    username VARCHAR(50) NOT NULL UNIQUE, -- Unique username for login
    email VARCHAR(100) NOT NULL UNIQUE, -- Unique email for communication
    password VARCHAR(255) NOT NULL, -- Encrypted password
    dob DATE, -- User's date of birth
    gender VARCHAR(10) CHECK (gender IN ('male', 'female')), -- Gender selection
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Update timestamp
);

INSERT INTO users_profiles (username, email, password, dob, gender) 
VALUES 
('john_doe', 'john.doe@example.com', 'encrypted_password_123', '1990-05-15', 'male'),
('jane_doe', 'jane.doe@example.com', 'encrypted_password_456', '1995-08-20', 'female'),
('sam_smith', 'sam.smith@example.com', 'encrypted_password_789', '1988-11-10', 'male');

SELECT * FROM users_profiles;
