-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(255) NOT NULL UNIQUE,
--   email VARCHAR(255) NOT NULL UNIQUE,
--   password_hash VARCHAR(255) NOT NULL,
--   created_at TIMESTAMP DEFAULT NOW()
-- );

-- CREATE TABLE progress (
--   id SERIAL PRIMARY KEY,
--   user_id INT REFERENCES users(id),
--   progress_value INT NOT NULL,
--   updated_at TIMESTAMP DEFAULT NOW()
-- );
