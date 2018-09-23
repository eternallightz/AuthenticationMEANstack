const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.get('/', (rec, res) => res.send('Hello from server'));
app.listen(PORT, () => console.log('Server running on: ' + PORT));
