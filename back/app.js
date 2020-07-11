const express = require('express')
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    guest_route = require("./routes/guest"),
    admin_route = require("./routes/admin");

const middlewares = [
    // express.static(path.join(__dirname, 'public')),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()
];
app.use(middlewares);

//define the data for form ingresed
app.use('/api/payment', guest_route);
app.use('/api/admin', admin_route);

app.listen(3000, (item) => {
    console.log(item)
    console.log("escuchando el puerto 3000")
})

