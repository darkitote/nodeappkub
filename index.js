var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hooooolaa" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Roblox" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " ALgo bien si jala" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
