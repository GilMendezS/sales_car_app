const StatusCar = require('../models/statusCar');

exports.getAllStatuses = async (req, res, next) => {
    try {
        const statuses = await StatusCar.find({active: true})
        return res.status(200).json({
            data: statuses
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching the statuses',
            error
        })
    }
}
exports.getStatusCar = async(req, res, next) => {
    try {
        const statusId = req.params.id;
        const statusCar = await StatusCar.findById(statusId)
        return res.status(200).json({
            data: statusCar
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching the status :(',
            error
        })
    }
}
exports.addStatusCar = async(req, res, next) => {
    const newStatus = new StatusCar({
        title: req.body.title
    })
    try {
        await newStatus.save();
        return res.status(200).json({
            message: 'Status created successfully :)',
            data: newStatus
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error saving the status :(',
            error
        })
    }
}
exports.updateStatusCar = async(req, res, next) => {
    try {
        const statusId = req.params.id;
        const updatdeStatusCar = await StatusCar.findByIdAndUpdate(statusId, req.body);
        return res.status(200).json({
            message :'the status has been updated :)',
            data :updatdeStatusCar
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error updating the information :(',
            error
        })
    }
}
exports.removeStatusCar = async(req, res, next) => {
    try {
        const statusId = req.params.id;
        await StatusCar.findByIdAndRemove(statusId)
        return res.status(200).json({
            message: 'The status was removed correctly :)'
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error removing the status :(',
            error
        })
    }
}