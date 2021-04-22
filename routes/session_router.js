const express = require('express');
let SessionController = require('../controllers/sessions');
let router = express.Router();

router.route('/sessions').get(SessionController.new).post(SessionController.create).delete(SessionController.destroy);

module.exports = router;