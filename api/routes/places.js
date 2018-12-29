const router = require('express').Router();
const middleware = require('../middlewares/auth');
const PlaceController = require('../controllers/places');

router.get('/', [middleware.checkToken], PlaceController.getStatesAndCities);

module.exports = router;