const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./api/routes/user');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.use(morgan('conbined'));
app.use(cors())
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