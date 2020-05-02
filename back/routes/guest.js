var express = require('express');
var router = express.Router(['strict']);

//define the data for form ingresed
// router.get('/', (req, res) => {
//     res.redirect("/register_payment")
// });

router.post('/register_payment', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.status(202).json({ error: null, data: "Ok"})
});

module.exports = router;