
console.clear('');

const hbs = require('hbs');
const express = require('express');
const app = express();
const path = require("path");

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');


//middelwere
app.use(express.static("public"));


app.get('/', function (req, res) {
    res.render("home", {
        nombre: "victor Hugo",
        titulo: "Estudio Guitarron"
    });
});

app.get('/elements', function (req, res) {
    res.render("elements", {
        nombre: "victor Hugo",
        titulo: "Estudio Guitarron"
    });
});

app.get('/generic', function (req, res) {
    res.render("generic", {
        nombre: "victor Hugo",
        titulo: "Estudio Guitarron"
    });
});


//para que funcione con las url de sendFile ocupa el path.join... hay que insalar npm i path
// app.get('/home', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/index.html'))
// });

// app.get('/elements', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/elements.html'))
// });

// app.get('/generic', function (req, res) {
//     res.sendFile(path.join(__dirname + '/public/generic.html'))
// });

// app.get('*', function (req, res) {
//     res.send('algo fallo')
// });




console.log('reresiriser');

app.listen(3003)





