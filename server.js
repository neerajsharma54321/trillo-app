const express = require('express');
const path = require('path');

const app = express();

console.log('server is in starting mode: ', process.env.PORT);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/trillo-app'));

app.get('/*', function(req,res) {
    console.log('I m in all path i.e. *');
res.sendFile(path.join(__dirname+'/dist/trillo-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);