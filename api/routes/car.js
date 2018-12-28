const router = require('express').Router();
const middleware = require('../middlewares/auth');
const CarController = require('../controllers/car');

router.get('/', CarController.getCars);

router.get('/:id', CarController.getCar);

router.post('/', [middleware.checkToken], CarController.addCar);

router.put('/:id', [middleware.checkToken], CarController.updateCar);

router.delete('/:id', [middleware.checkToken], CarController.removeCar);

module.exports = router;

