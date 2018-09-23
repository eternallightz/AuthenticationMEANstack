 const express = require('express');
 const router = express.Router();

 router.get('/', (rec, res) => (res.send('From API router')));
 module.exports = router;