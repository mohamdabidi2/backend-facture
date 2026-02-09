const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

router.get('/', mainController.getInvoices);
router.get('/:id', mainController.getInvoiceById);
router.post('/', mainController.createInvoice);
router.put('/:id', mainController.updateInvoice);
router.delete('/:id', mainController.deleteInvoice);

module.exports = router;
