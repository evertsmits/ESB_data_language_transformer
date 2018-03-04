# ESB_data_language_transformer
ESB for school assignment. This will be a server converting JSON to XML and XML to JSON.

# Requirements
npm install express
npm install body-parser
npm install body-parser-xml
npm install jsontoxml
npm install xml-js

# How to run
node app.js in terminal

# How to test
Use postman to make post calls to the api in the form of

for converting JSON to XML post JSON (in the body of postman call) to this address
yourlocalnetworkip:3000/JSON

for converting XML to JSON post XML (in the body of postman call) to this address
yourlocalnetworkip:3000/XML

# Where are results shown
Results are logged in the terminal
