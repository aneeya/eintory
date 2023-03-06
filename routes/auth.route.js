const express = require('express');

const controller = require('../controllers/auth.controll');

const router = express.Router();


router.get('/signup', controller.getSignup);

router.post('/signup', controller.createSignup);

router.get('/login', controller.getLogin);

module.exports = router