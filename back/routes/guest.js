var express = require('express');
var router = express.Router(['strict']);

router.post('/register', (req, res) => {
    console.log(JSON.stringify(req.body));
    // revisar en el dynamo si el usuario existe

    // guardar/actualizar el numero de referencia bancaria
    
    // devolver si pudo guardar.
    res.status(202).json({ error: null, data: "Ok"})
});

router.post('/consult', (req, res) => {
    console.log(JSON.stringify(req.body));
    // revisar en el dynamo si el usuario existe

    // devolver el estado en el que se encuentra (Pendiente, Revisado, Error)
    
    // devolver si pudo guardar.
    res.status(202).json({ error: null, data: "Ok"})
});

module.exports = router;