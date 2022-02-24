const express = require('express');
const router = express.Router();
//! imp Controllers
const categoryController = require('../controllers/categoryController');

router.get("/", categoryController.readAll);
router.post('/', categoryController.create);

module.exports = router;