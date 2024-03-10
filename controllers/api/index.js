const router = require('express').Router();
const eventRoutes = require('./event-routes');
const eventParticipantRoutes = require('./event-participant-routes');

router.use('/events', eventRoutes);
router.use('/eventsParticipants', eventParticipantRoutes);

module.exports = router;