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
    console.log("Database dealers module connected");
})

router.post('/addDealers', (req, res) => {

    let {
            d_id,
        cselection,
        sname,
        brand,
        phone,
        address,
        b_img,
        } = req.body;
    // console.log(Brand)
    const text = 'INSERT INTO dealers(d_id,cselection,sname,brand,phone,address,b_img) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const values = [
        d_id,
        cselection,
        sname,
        brand,
        phone,
        address,
        b_img,

    ];

    console.log(values);
    client.query(text, values)
        .then(data => {
            console.log(data.rows[0])
            res.status(200).send(data.rows[0])

        })
        .catch(e => res.status(500).send(e.stack))

});

router.get('/getDealer', (req, res) => {
    client.query('SELECT * FROM dealers').then((data) => {
        res.status(200).send(data.rows)
    })
        .catch((error) => {
            res.status(500).send(error.stack)
        })
});


router.post('/addMechanic', (req, res) => {

    let {
        cselection,
        sname,
        brand,
        phone,
        address,
        b_img,
        m_id,
            } = req.body;
    // console.log(Brand)
    const text = 'INSERT INTO mechanic(cselection,sname,brand,phone,address,b_img,m_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const values = [
        cselection,
        sname,
        brand,
        phone,
        address,
        b_img,
        m_id,
    ];

    console.log(values);
    client.query(text, values)
        .then(data => {
            console.log(data.rows[0])
            res.status(200).send(data.rows[0])

        })
        .catch(e => res.status(500).send(e.stack))

});

router.get('/getMechanic', (req, res) => {
    client.query('SELECT * FROM mechanic').then((data) => {
        res.status(200).send(data.rows)
    })
        .catch((error) => {
            res.status(500).send(error.stack)
        })
});

module.exports = router; 