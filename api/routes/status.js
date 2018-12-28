const router = require('express').Router();
const middleware = require('../middlewares/auth');
const StatusCarController = require('../controllers/statusCar');

router.get('/', [middleware.checkToken], StatusCarController.getAllStatuses);

router.get('/:id', [middleware.checkToken], StatusCarController.getStatusCar);

router.post('/', [middleware.checkToken], StatusCarController.addStatusCar);

router.put('/:id', [middleware.checkToken], StatusCarController.updateStatusCar);

router.delete('/:id', [middleware.checkToken], StatusCarController.removeStatusCar);

module.exports = router;