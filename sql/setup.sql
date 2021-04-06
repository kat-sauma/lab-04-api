DROP TABLE IF EXISTS jokes;
DROP TABLE IF EXISTS favorites;

CREATE TABLE jokes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  joke VARCHAR(512) NOT NULL
);

CREATE TABLE favorites (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_name TEXT NOT NULL,
  favorite_jokes VARCHAR(512) NOT NULL
);
