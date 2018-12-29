const Car = require('../models/car');
exports.getCars = async (req, res, next ) => {
    try {
        const cars = await Car.find()
                .populate('status')
                .populate('user')
                .populate('city')
                ;
        return res.status(200).json({
            data: cars
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching the cars',
            error
        })
    }
}
exports.addCar = async (req, res, next) => {
    const newCar = new Car({
        title: req.body.title,
        brand: req.body.brand,
        price: req.body.price,
        mileage: req.body.mileage,
        description: req.body.description,
        status: req.body.status,
        city: req.body.city,
        location: {
            longitude: req.body.longitude,
            latitude: req.body.latitude
        },
        user: req.user._id
    })
    try {
        await newCar.save();
        return res.status(200).json({
            message: 'Car registered successfully :)',
            data: newCar
        })
    } catch (error) {
        return res.status(500).json({
            'message': 'Error creating the car',
            error
        })
    }
}
exports.getCar = async(req, res, next) => {
    try {
        const carId = req.params.id;
        const car = await Car.findById(carId)
                            .populate('user')
                            .populate('city')
                            .populate('status')
        return res.status(200).json({
            data: car
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching the car',
            error
        })
    }
}
exports.updateCar = async(req, res, next) => {
    try {
        const carId = req.params.id;
        const updatedCar = await Car.findByIdAndUpdate(carId, req.body)
        return res.status(200).json({
            message: `Car's Information has been updated :)`,
            data: updatedCar
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error updating the information related to the car',
            error
        })
    }
}
exports.removeCar = async(req, res, next) => {
    try {
        const carId = req.params.id;
        await Car.findByIdAndRemove(carId)
        return res.status(200).json({
            message: 'This car was removed successfully :)'
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error removing the car',
            error
        })
    }
}