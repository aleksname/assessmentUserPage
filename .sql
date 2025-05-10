CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(100) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE grades (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  lesson_id INTEGER REFERENCES lessons(id),
  attention_score INTEGER CHECK (attention_score BETWEEN 0 AND 12),
  activity_score INTEGER CHECK (activity_score BETWEEN 0 AND 12),
  kahoot_score INTEGER CHECK (kahoot_score BETWEEN 0 AND 12),
  is_present BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
