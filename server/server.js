const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const api = require('./routes/api.js');

const app = express();

app.use(bodyParser.json());

app.use('/api', api);
app.get('/', (rec, res) => res.send('Hello from server'));
app.listen(PORT, () => console.log('Server running on: ' + PORT));
