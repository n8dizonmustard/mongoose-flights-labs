const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ticketsCtrl = require('../controllers/tickets');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.post('/:id', flightsCtrl.addDestination);
router.get('/:id/tickets', ticketsCtrl.showTicket);
router.post('/:id/tickets', ticketsCtrl.create);
router.post('/:id/tickets', ticketsCtrl.addtoFlight);
router.post('/:flightId/addTicket', ticketsCtrl.addTicket);

module.exports = router;