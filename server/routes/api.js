const express = require('express');
const router = express.Router();
const { Client } = require('pg');

// const DB = require('../config/config');


let response = {
    status: 200,
    data: [],
    message: null
};


const client = new Client({
    user: 'xslssbhuewxitb',
    host: 'ec2-54-221-198-206.compute-1.amazonaws.com',
    database: 'd1qqlimu5v35rs',
    password: 'd7d615706f14d09f57f019dbd59f7488fa44377e17847c2df993e9ed41a5a012',
    port: 5432,
    ssl: true
})
client.connect().then((data) => {
    console.log("Database api module connected");
    
})

// const res = client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!


router.post('/addData', (req, res) => {

});


router.post('/saveTicket', (req, res) => {
    let { subject, description, assignee, type, creator, ticketId, priority, assigned_date, end_date, cs_id } = req.body

    const queryText = 'INSERT INTO public."Tickets" (subject, description, creator, ticket_id, priority, assignee, type, assigned_date, end_date, cs_id) VALUES($1, $2, $3, $4, $5, $6, $7 , $8, $9, $10) RETURNING *';
    const values = [subject, description, creator, ticketId, priority, assignee, type, assigned_date, end_date, cs_id]

    client.query(queryText, values).then((data) => {
        res.status(200).send(data.rows)
    })
    .catch(e => {
        res.status(500).send(e.stack)
    })
})


router.get('/getUserData', (req, res) => {
    client.query('SELECT * FROM students').then((data) => {
        res.status(200).send(data.rows)
    })
    .catch((error) => {
        res.status(500).send(error.stack)
    })
});



module.exports = router;