const express = require('express');
const router = express.Router();
//! imp Controllers
const serviceCategoryController = require('../controllers/serviceCategoryController');

router.get("/", serviceCategoryController.readAll);
router.post('/', serviceCategoryController.create);

module.exports = router;