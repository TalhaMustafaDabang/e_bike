// let connectionString = 'postgres://xslssbhuewxitb:d7d615706f14d09f57f019dbd59f7488fa44377e17847c2df993e9ed41a5a012@ec2-54-221-198-206.compute-1.amazonaws.com:5432/d1qqlimu5v35rs';
const { Client } = require('pg');
const client = new Client({
    user: 'xslssbhuewxitb',
    host: 'ec2-54-221-198-206.compute-1.amazonaws.com',
    database: 'd1qqlimu5v35rs',
    password: 'd7d615706f14d09f57f019dbd59f7488fa44377e17847c2df993e9ed41a5a012',
    port: 5432,
    ssl: true
  })
  client.connect()

module.exports = client;


