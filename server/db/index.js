const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://localhost/string-list-db',
});

client.connect();

module.exports = client;
