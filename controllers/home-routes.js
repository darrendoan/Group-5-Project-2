const router = require('express').Router();
const { Event } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const eventData = await Event.findAll();

    // Serialize data so the template can read it
    const events = eventData.map((event) => event.get({ plain: true }));
    console.log(events);

    res.render('home', {
      events,
      logged_in: req.oidc.isAuthenticated(), // oidc helper that returns a bool if logged in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/event/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id);

    const event = eventData.get({ plain: true });

    res.render('event', {
      ...event,
      logged_in: req.oidc.isAuthenticated(), // oidc helper that returns a bool if logged in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
