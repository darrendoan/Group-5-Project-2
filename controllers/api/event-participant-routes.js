const router = require('express').Router();
const { EventParticipant } = require('../../models');
const requiresAuth = require('../../utils/auth');

router.post('/', requiresAuth(), async (req, res) => {
  try {
    const newEventParticipant = await EventParticipant.create({
      ...req.body
    });

    res.status(200).json(newEventParticipant);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', requiresAuth(), async (req, res) => {
  try {
    const eventParticipantData = await EventParticipant.findByPk(req.params.id);

    const eventParticipant = eventParticipantData.get({ plain: true });
    
    res.status(200).json(eventParticipant);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', requiresAuth(), async (req, res) => {
  // update a Event by its `id` value
  try {
    const eventParticipantData = await EventParticipant.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!eventParticipantData) {
      res.status(404).json({ message: 'No event participant found with this id!' });
      return;
    }

    res.status(200).json(eventParticipantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', requiresAuth(), async (req, res) => {
  try {
    const eventParticipantData = await EventParticipant.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!eventParticipantData) {
      res.status(404).json({ message: 'No event participant found with this id!' });
      return;
    }

    res.status(200).json(eventParticipantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
