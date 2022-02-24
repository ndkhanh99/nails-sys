//! imp Models
const ServiceCategory = require('../models/ServiceCategory');
const Service = require('../models/Service');

const getAllServiceCategories = async (req, res, next) => {
    try {
        const serviceCategories = await ServiceCategory.find({}).populate({ path: 'services', model: 'Service' });
        //! response
        res.status(200).json({ serviceCategories });
    } catch (error) {
        console.log('service getAll() error: ', error);
        res.status(500).json({
            errorMessage: 'Please try again next time',
        });
    }
};

const getServicesWithCategory = async (req, res, next) => {
    const { serviceCategoryId } = req.params;
    console.log(`servicesController - serviceCategoryId: `, serviceCategoryId);
    try {
        const servicesCategory = await ServiceCategory.find({ _id: serviceCategoryId }).populate({ path: 'services', model: 'Service' });
        // const services = await ServiceCategory.find({ _id: serviceCategoryId });
        const services = servicesCategory[0].services;
        console.log('SUCCESS servicesController - getServicesWithCategory: ', services);
        res.status(200).json( { services } ); //! return -> Action payload
    } catch (error) {
        console.log('ERROR servicesController - getServicesWithCategory: ', error);
        res.status(500).json({
            errorMessage: 'Please try again next time',
        });
    }
};

const createServiceCategory = async (req, res) => {
    try {
        //! Service Category Data
        const { name } = req.body;
        console.log(`serviceController - name: `, name);

        const existServiceCategory = await ServiceCategory.findOne({ name });
        if (existServiceCategory) {
            return res.status(400).json({ errorMessage: `Category: ${name} already exists!` });
        }

        // ! create Category instance
        var serviceCategory = new ServiceCategory();
        serviceCategory.name = name;
        serviceCategory = await serviceCategory.save();

        // const serviceCategory = ServiceCategory.create(serviceCategory);
        res.status(200).json({
            serviceCategory,
            successMessage: `Service Category ${serviceCategory.name} created successfully!`,
        });

        console.log('SUCCESS servicesController.createServiceCategory: ', serviceCategory);
    } catch (error) {
        res.status(500).json({
            errorMessage: 'Please try again next time',
        });
        console.log('ERROR servicesController.createServiceCategory: ', error);
    }
};

const createService = async (req, res, next) => {
    try {
        const { name, price, content, category } = req.body;
        // const { serviceCategoryId } = req.params;

        // console.log(`servicesController - id: `, serviceCategoryId);

        const existService = await Service.findOne({ name });
        if (existService) {
            console.log('ERROR servicesController.createService');
            return res.status(400).json({ errorMessage: `Service - ${name} already exists!` });
        }

        //! CREATE - Serivce
        var service = new Service();
        service.name = name;
        service.price = price;
        service.content = content;
        service.category = category;
        service = await service.save();

        //! UPDATE - Service Category
        await ServiceCategory.findByIdAndUpdate(category, { $push: { services: service._id } }, { new: true });

        res.status(200).json({
            service,
            successMessage: `Service ${service.name} created successfully!`,
        });

        // const newServiceCategory = ServiceCategory.create(serviceCategory);
        console.log('SUCCESS servicesController.createService: ', service);
    } catch (error) {
        res.status(500).json({
            errorMessage: 'Please try again next time',
        });
        console.log('ERROR servicesController.createService: ', error);
    }
};

module.exports = {
    getAllServiceCategories,
    getServicesWithCategory,
    createServiceCategory,
    createService,
};
