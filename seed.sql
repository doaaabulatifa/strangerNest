CREATE TABLE peofiles(
    id SERIAL PRIMARY KEY.
    clerk_id TEXT,
    user_name TEXT,
    bio TEXT
);
CREATE TABLE posts(
    id SERIAL PRIMARY KEY.
    use_id INT REFERENCES profiles(id),
    content TEXT
);