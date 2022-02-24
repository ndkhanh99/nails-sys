//! imp Models
const Category = require('../models/Category');

const readAll = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json({ categories });
    } catch (error) {
        console.log('category getAll() error: ', error);
        res.status(500).json({
            errorMessage: 'Xin vui lòng thử lại sau <3',
        });
    }
};

const create = async (req, res) => {
    const { name, color } = req.body;
    try {
        const existCategory = await Category.findOne({ name });
        if (existCategory) {
            return res.status(400).json({ errorMessage: `Loại: ${name} đã được tạo` });
        }
        //! create Category instance
        let newCategory = new Category();
        newCategory.name = name;
        newCategory.color = color;
        newCategory = await newCategory.save();

        res.status(200).json({
            category: newCategory,
            successMessage: `Bạn đã thêm Category - ${newCategory.name} thành công`,
        });
        console.log('categoryController.create: ', newCategory);
    } catch (error) {
        res.status(500).json({
            errorMessage: 'Xin vui lòng thử lại sau <3',
        });
        console.log('categoryController.create | error: ', error);
    }
};

module.exports = {
    readAll,
    create,
};
