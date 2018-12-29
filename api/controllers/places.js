const State = require('../models/state');
const City = require('../models/city');

exports.getStatesAndCities = async (req, res, next) => {
    try {
        const states = await State.find();
        const cities = await City.find();
        return res.status(200).json({
            data: {
                states,
                cities,
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Error fetching the states and cities :(',
            error
        })
    }
}