const express = require('express')
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    http = require("http"),
    guest_route = require("./routes/guest"),
    admin_route = require("./routes/admin");

const middlewares = [
    // express.static(path.join(__dirname, 'public')),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()
];
app.use(middlewares);

//define the data for form ingresed
app.get('/', (req, res) => {
    // console.log("enviar al welcome", path.join(__dirname+'/../front/welcome.html'))
    // res.set('Content-Type', 'text/html');
    console.log(res);
    res.sendFile(path.join(__dirname+'/dist/form-query/query.html'),/* ({"Content-Type": "application/json; charset=utf-8"}), */ (err) => {

    })
    // res.send(path.join(__dirname+'/front/welcome.html'));
    
});
app.use('/payment', guest_route);
app.use('/admin', admin_route);

app.listen(3000, (item) => {
    console.log(item)
    console.log("escuchando el puerto 3000")
})

