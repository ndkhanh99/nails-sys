const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const express = require('express');
//! imp middleware
const cors = require('cors');
var bodyParser = require('body-parser');

//! imp Routes
const serviceCategoryRoutes = require('./routes/serviceCategoryRoutes');
const servicesRoutes = require('./routes/servicesRoutes');

var corsOptions = {
    origin: 'http://localhost:3000',
};

//! Connect to dotenv
dotenv.config();

//! Connect to MongoDB
connectDB();

//! Application
const app = express();

//! Middleware
// app.use(cors(corsOptions));

//! parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//! parse application/json
app.use(bodyParser.json())

// app.use(express.json());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//! routes
app.use('/api/services', servicesRoutes);

// app.use("/api/auth", authRoutes);
// app.use('/api/services1', serviceRoutes);
// app.use('/api/product', productRoutes);
// app.use("/api/filter", filterRoutes);
// app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT;



app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});
