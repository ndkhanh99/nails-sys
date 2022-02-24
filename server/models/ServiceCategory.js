const mongoose = require('mongoose');

const serviceCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        services: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Service',
                // required: true,
            },
        ],
    },
    { timestamps: true }
);

const ServiceCategory = mongoose.model('ServiceCategory', serviceCategorySchema);

module.exports = ServiceCategory;
