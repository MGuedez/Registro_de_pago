var express = require('express')
var app = express();
var guest_route = require("./routes/guest");
var admin_route = require("./routes/admin");

app.use('/', guest_route);
app.use('/admin', admin_route);

app.get('/admin', function (req, res) {
    res.send('hello world')
})

app.listen(3000, (item) => {
    console.log(item)
    console.log("escuchando el puerto 3000")
})

