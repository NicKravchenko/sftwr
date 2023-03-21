const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('Pages/number', {
        title: 'Number convertor',
        decimalNum: '',
        binaryNum: ''
    });
});

router.post('/', (req, res, next) => {
    const dn = req.body.decimalNum;

    bn = Number(dn).toString(2);
    
    res.render('Pages/number', {
        title: 'Number convertor',
        decimalNum: dn,
        binaryNum: bn
    });
})

module.exports = router;