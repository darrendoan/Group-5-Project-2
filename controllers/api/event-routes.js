const router = require('express').Router();
const { Event } = require('../../models');
const requiresAuth = require('../../utils/auth');

router.post('/', requiresAuth(), async (req, res) => {
  try {
    const newEvent = await Event.create({
      ...req.body,
      organizer_id: req.oidc.user.sub,
    });

    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', requiresAuth(), async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id);

    const event = eventData.get({ plain: true });
    
    res.status(200).json(event);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', requiresAuth(), async (req, res) => {
  // update a Event by its `id` value
  try {
    const eventData = await Event.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', requiresAuth(), async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
