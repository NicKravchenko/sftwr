const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    const mode = req.body.mode ? req.body.mode : "charToAsc";
    const asc = '';
    const char = '';
    console.log("Im in main");
    res.render('Pages/asc', {
        title : 'Asc convertor',
        mode: mode,
        asc : asc,
        char : char
    });
});

router.post('/changeMode', (req, res, next) => {
    const mode = req.body.mode;

    res.render("Pages/asc",{
        title : 'Asc convertor',
        mode: mode,
        asc : "",
        char : ""
        });
});

router.post('/ascToChar', (req, res, next) => {
    const mode = req.body.mode;
    const asc = req.body.asc;
    const char = String.fromCharCode(asc);

    res.render("Pages/asc",{
        title : 'Asc convertor',
        mode: mode,
        asc : asc,
        char : `${asc} => ${char}`
        });
});

router.post('/charToAsc', (req, res, next) => {
    const mode = req.body.mode;
    const char = req.body.char;
    const asc = char.charCodeAt(0);

    res.render("Pages/asc",{
        title : 'Asc convertor',
        mode: mode,
        asc : `${char} => ${asc}`,
        char : char
        });
})


module.exports = router;