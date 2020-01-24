let express = require('express');
let router = express.Router();
let burger = require('../models/burgers.js');

router.get('/', (req, res) => {
    burger.all((data) => {
        let hbsObject = {
            burgers: data
        }
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insert([
        'name'
    ], [
        req.body.name
    ], result => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    let condition = 'id = ' + req.params.id;
    burger.update({
        eaten: req.body.eaten
    }, condition, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;