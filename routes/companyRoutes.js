const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.get('/', companyController.getCompany);
router.post('/', companyController.updateCompany);
router.put('/', companyController.updateCompany);

module.exports = router;
