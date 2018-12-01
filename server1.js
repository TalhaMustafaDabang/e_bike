const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const cors = require('cors');
const app = express();
const { Pool, Client } = require('pg')



//Api Imports
const api = require('./server/routes/api');
const dealersApi = require('./server/routes/dealers');
const classifiedApi = require('./server/routes/classified');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


//Connection
const client = new Client({
    user: 'xslssbhuewxitb',
    host: 'ec2-54-221-198-206.compute-1.amazonaws.com',
    database: 'd1qqlimu5v35rs',
    password: 'd7d615706f14d09f57f019dbd59f7488fa44377e17847c2df993e9ed41a5a012',
    port: 5432,
    ssl: true
})
client.connect()


// API location
app.use('/api', api);
app.use('/api/dealer', dealersApi);
app.use('/api/classified', classifiedApi);



// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '5200';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));