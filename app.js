const express = require('express')
const app = express(), bodyParser = require('body-parser') ;
require('body-parser-xml')(bodyParser);

app.use(bodyParser.json());
app.use(bodyParser.xml());

app.get('/', (req, res) => res.send('Welcome to the ESB. Send JSON data to localhost:3000/JSON in order to retrieve XML, and send XML data to localhost:3000/XML to retireve JSON'));

app.post('/JSON', (req, res) => console.log(req.body));

app.post('/XML', (req, res) => console.log(req.body));

app.listen(3000, () => console.log('Example app is listening on port 3000'));
