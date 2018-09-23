 const express = require('express');
 const router = express.Router();
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
 module.exports = router;