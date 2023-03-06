const express = require('express');

const controller = require('../controllers/eintory.controll');

const router = express.Router();


router.get('/create-eintory', controller.getEintory);


module.exports = router