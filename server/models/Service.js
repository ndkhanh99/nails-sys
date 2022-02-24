const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        content: {
            type: String,
            required: false,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ServiceCategory',
            // required: true,
        },
    },
    { timestamps: true }
);

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;
