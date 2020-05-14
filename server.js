//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/trillo-app'));
console.log(`I'm running the on application`);
app.use(express.static(__dirname + '/dist'));
res.sendFile(path.join(__dirname + '/dist/index.html'));

app.get('/*', function(req,res) {
    console.log(`I'm in index.html file`);
res.sendFile(path.join(__dirname+'/dist/trillo-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);