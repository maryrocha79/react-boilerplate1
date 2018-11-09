DROP DATABASE IF EXISTS "string-list-db";

CREATE DATABASE "string-list-db";
\c "string-list-db";
CREATE TABLE strings (id SERIAL PRIMARY KEY, string TEXT);

INSERT INTO strings (string) VALUES ('My first time with react-boiler plate');



