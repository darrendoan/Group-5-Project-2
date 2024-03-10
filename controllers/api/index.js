const router = require('express').Router();
const eventRoutes = require('./event-routes');

router.use('/events', eventRoutes);
router.use('/eventsParticipants', eventParticipantRoutes);

module.exports = router;