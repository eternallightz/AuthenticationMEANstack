 const express = require('express');
 const router = express.Router();
 const User = require('../models/user.js');
 const mongoose = require('mongoose');

 const db = 'mongodb://usernika:nikita1@ds213053.mlab.com:13053/eventsdb';
 mongoose.connect(db, err => {
     if (err){
        console.error('Error!' + err);
     } else {
        console.log('Connected to mongodb');
     }
 });

 router.get('/', (rec, res) => (res.send('From API router')));

 router.post('/register', (req, res) =>{
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser);
        }
    });
 });

 router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid email');
            } else
            if (user.password !== userData.password) {
                res.status(401).send('Invalid password');
            } else {
                res.status(200).send(user);
            }
        }
    });
 });

 router.get('/events', (req, res) => {
    let events = [
        {
            "name": "Regular user",
            "description": "lorem ipsum"
        }
    ];
    res.json(events);
 });
 
 router.get('/special', (rec, res) => {
    let events = [
        {
            "name": "Special user",
            "description": "Wildfire"
        }
    ];
    res.json(events);
 });

 module.exports = router;