const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getClients);
router.post('/', mainController.createClient);
router.put('/:id', mainController.updateClient);
router.delete('/:id', mainController.deleteClient);

module.exports = router;
