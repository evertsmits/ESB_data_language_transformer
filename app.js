const express = require('express')
const jsontoxml = require('jsontoxml')
const xmltojson = require('xml-js')
const app = express(), bodyParser = require('body-parser') ;
require('body-parser-xml')(bodyParser);

app.use(bodyParser.raw({type: 'application/json'}));
app.use(bodyParser.raw({type: 'application/xml'}));

app.get('/', (req, res) => res.send('Welcome to the ESB. Send JSON data to localhost:3000/JSON in order to retrieve XML, and send XML data to localhost:3000/XML to retireve JSON'));

app.post('/JSON', (req, res) => convertToXML(req.body));

app.post('/XML', (req, res) => convertToJSON(req.body));

app.listen(3000, () => console.log('Example app is listening on port 3000'));


convertToXML = (data) => {
    console.log("CONVERT TO XML")
    console.log(data);
    data = jsontoxml(data);
    console.log("TRANSFORMED JSON TO XML", data);
}

convertToJSON = (data) => {
    console.log("CONVERT TO JSON")
    console.log(data);
    data = xmltojson.xml2json(data, {compact: false, spaces: 4});
    console.log("TRANSFORMED XML TO JSON", data)

}
