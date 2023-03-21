const express = require('express');

const route = express.Router();

route.get('/', (req, res, next) => {
    res.render('Pages/index', {
        title: 'Main page'
    });
})



module.exports = route;