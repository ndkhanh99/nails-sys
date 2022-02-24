const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL);

        // console.log(`Connected to MongdoDB`);
        mongoose.connection.on('connected', () => {
            console.log(`Connected to MongdoDB`);
        });

        //! catch co the thay the
        // mongoose.connection.on('error', (err) => {
        //     console.log('Error: ', err);
        // });
    } catch (error) {
        console.log(`Server error: `, error);
    }
};

module.exports = connectDB;
