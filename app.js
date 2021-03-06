const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const userRoutes = require('./api/routes/user');
const carRoutes = require('./api/routes/car');
const placeRoutes = require('./api/routes/places');
const statusCarRoutes = require('./api/routes/status');
app.use(cors())
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/statuses', statusCarRoutes);
app.use('/api/states-and-cities', placeRoutes);


const PORT = process.env.PORT || 3000;

app.use(morgan('conbined'));

app.listen(PORT, () => {
    console.log(`Server running... ${PORT}`)
    mongoose.connect('mongodb://localhost:27017/cars_app', { useNewUrlParser: true })
    .then(db => {
        console.log('DB Connected')
    })
    .catch(err => {
        console.log(`Db Error: ${err}`)
    })
})