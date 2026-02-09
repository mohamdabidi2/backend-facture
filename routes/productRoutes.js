const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getProducts);
router.post('/', mainController.createProduct);
router.put('/:id', mainController.updateProduct);
router.delete('/:id', mainController.deleteProduct);

module.exports = router;
