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
    console.log("Database clasified module connected");
})


router.post('/crete-add', (req, res) => {

    console.log("crete-add", req.body);
    
    let {
        brand,
        city,
        description,
        mobilenumber,
        price,
        sellername,
        title,
        uid,
        year
    } = req.body;

    const text = 'INSERT INTO classifieddetails(brand,city,description,mobilenumber,price,sellername,title,uid,year) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
    const values = [
        brand,
        city,
        description,
        mobilenumber,
        price,
        sellername,
        title,
        uid,
        year
    ];

    client.query(text, values)
        .then(data => {
            console.log(data.rows[0])
            res.status(200).send(data.rows[0])
        })
        .catch(e => res.status(500).send(e.stack))

});


router.get('/get-adds', (req, res) => {
    res.status(200).send({status:'200'})
    // client.query('SELECT * FROM classifieddetails').then((data) => {
    //     res.status(200).send(data.rows)
    // })
    //     .catch((error) => {
    //         res.status(500).send(error.stack)
    //     })
});




module.exports = router; 