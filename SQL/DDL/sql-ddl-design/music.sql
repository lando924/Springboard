-- from the terminal run:
-- psql < music.sql


DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music

CREATE TABLE artists (
  id SERIAL PRIMARY KEY, 
  name TEXT
);

CREATE TABLE producers (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE songs
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  release_date DATE NOT NULL,
  album TEXT NOT NULL
);

CREATE TABLE song_artists_producers (
  id SERIAL PRIMARY KEY, 
  song_id INT REFERENCES songs,
  artists_id INT REFERENCES artists,
  producers_id INT REFERENCES producers
);

INSERT INTO artists
  (name)
VALUES
  ('Hanson'), ('Queen'), ('Mariah Cary'), ('Lady Gaga'), ('Bradley Cooper'), ('Boyz II Men'),
  ('Nickelback'), ('Katy Perry'), ('Juicy J'), ('Destiny''s Child'), ('Avril Lavigne'),
  ('Maroon 5'), ('Christina Aguilera'), ('Jay Z'), ('Alicia Keys');

INSERT INTO producers
  (name)
VALUES
  ('Dust Brothers'), ('Stephen Lironi'), ('Roy Thomas Baker'), ('Walter Afanasieff'),
  ('Benjamin Rice'), ('Rick Parashar'), ('Al Shux'), ('Cirkut'), ('Shellback'), ('Benny Blanco'),
  ('Darkchild'), ('The Matrix'), ('Max Martin');

INSERT INTO songs
  (title, duration_in_seconds, release_date, album)
VALUES
  ('MMMBop', 238, '04-15-1997', 'Middle of Nowhere'),
  ('Bohemian Rhapsody', 355, '10-31-1975', 'A Night at the Opera'),
  ('One Sweet Day', 282, '11-14-1995', 'Daydream'),
  ('Shallow', 216, '09-27-2018', 'A Star Is Born'),
  ('How You Remind Me', 223, '08-21-2001', 'Silver Side Up'),
  ('New York State of Mind', 276, '10-20-2009', 'The Blueprint 3'),
  ('Dark Horse', 215, '12-17-2013', 'Prism'),
  ('Moves Like Jagger', 201, '06-21-2011', 'Hands All Over'),
  ('Complicated', 244, '05-14-2002', 'Let Go'),
  ('Say My Name', 240, '11-07-1999', 'The Writing''s on the Wall');

INSERT INTO song_artists_producers
  (song_id, artists_id, producers_id)
VALUES 
  (1,1,1), (1,1,2), (2,2,3), (3,3,4), (3,6,4), (4,4,5), (4,5,5), (5,7,6), (6,14,7), (6,15,7), (7,8,13), (7,9,8), (8,12,9), (8,13,10),
  (9,11,12), (10,10,11); 

-- INSERT INTO songs
--   (title, duration_in_seconds, release_date, artists, album, producers)
-- VALUES
--   ('MMMBop', 238, '04-15-1997', '{"Hanson"}', 'Middle of Nowhere', '{"Dust Brothers", "Stephen Lironi"}'),
--   ('Bohemian Rhapsody', 355, '10-31-1975', '{"Queen"}', 'A Night at the Opera', '{"Roy Thomas Baker"}'),
--   ('One Sweet Day', 282, '11-14-1995', '{"Mariah Cary", "Boyz II Men"}', 'Daydream', '{"Walter Afanasieff"}'),
--   ('Shallow', 216, '09-27-2018', '{"Lady Gaga", "Bradley Cooper"}', 'A Star Is Born', '{"Benjamin Rice"}'),
--   ('How You Remind Me', 223, '08-21-2001', '{"Nickelback"}', 'Silver Side Up', '{"Rick Parashar"}'),
--   ('New York State of Mind', 276, '10-20-2009', '{"Jay Z", "Alicia Keys"}', 'The Blueprint 3', '{"Al Shux"}'),
--   ('Dark Horse', 215, '12-17-2013', '{"Katy Perry", "Juicy J"}', 'Prism', '{"Max Martin", "Cirkut"}'),
--   ('Moves Like Jagger', 201, '06-21-2011', '{"Maroon 5", "Christina Aguilera"}', 'Hands All Over', '{"Shellback", "Benny Blanco"}'),
--   ('Complicated', 244, '05-14-2002', '{"Avril Lavigne"}', 'Let Go', '{"The Matrix"}'),
--   ('Say My Name', 240, '11-07-1999', '{"Destiny''s Child"}', 'The Writing''s on the Wall', '{"Darkchild"}');
