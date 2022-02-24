const express = require('express');
const router = express.Router();
//! imp Controllers
const servicesController = require('../controllers/servicesController');
//! get All ServiceCategory
// router.post("/:serviceCategoryId", servicesController.create);
// router.get("/:serviceCategoryId", servicesController.readAll);

//! Get All of Service Category
router.get("/", servicesController.getAllServiceCategories);
//! Create a Service Category
router.post('/', servicesController.createServiceCategory);
//! Create a Service within Category
router.get('/:serviceCategoryId', servicesController.getServicesWithCategory);
//! Create a Service within Category
router.post('/:serviceCategoryId', servicesController.createService);

module.exports = router;