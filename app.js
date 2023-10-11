
console.clear('');

const express = require('express');
const app = express();
const path = require("path");


//middelwere
app.use(express.static("public"));


//para que funcione con las url de sendFile ocupa el path.join... hay que insalar npm i path
app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.get('/elements', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/elements.html'))
});

app.get('/generic', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/generic.html'))
});

app.get('*', function (req, res) {
    res.send('algo fallo')
});




console.log('reresiriser');

app.listen(3003)





