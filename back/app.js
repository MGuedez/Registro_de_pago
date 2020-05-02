const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const guest_route = require("./routes/guest");
const admin_route = require("./routes/admin");

const middlewares = [
    // express.static(path.join(__dirname, 'public')),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()
];
app.use(middlewares);

app.use('/', guest_route);
app.use('/admin', admin_route);

app.listen(3000, (item) => {
    console.log(item)
    console.log("escuchando el puerto 3000")
})

