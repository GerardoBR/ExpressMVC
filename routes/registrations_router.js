const express = require('express');
let RegistrationCpntroller = require('../controllers/registration');

let router = express.Router();

router.get('/singup',RegistrationCpntroller.new);
router.route('/users').post(RegistrationCpntroller.create);

module.exports=router;