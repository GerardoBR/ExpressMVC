const express = require('express');
let TasksController = require('../controllers/tasks');

let router = express.Router();
//permite definir rutas 
router.route('/tasks').get(TasksController.index).post(TasksController.create);

router.get('/tasks/new',TasksController.new);
router.get('/tasks/:id/edit',TasksController.edit);
router.route('/tasks/:id').get(TasksController.show).put(TasksController.update).delete(TasksController.destroy); //wilcard

module.exports = router;