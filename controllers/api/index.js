const router = require('express').Router();
const eventRoutes = require('./event-Routes');
const eventParticipantRoutes = require('./event-participant-Routes');

router.use('/events', eventRoutes);
router.use('/eventsParticipants', eventParticipantRoutes);

module.exports = router;