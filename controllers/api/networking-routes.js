const router = require("express").Router();
const { Networking, User } = require('../../models');

//these are the routes for the api/memes endpoint
// this is a test 


router.get('/', async (req, res) => {
  //find all networking events
  //include the associated user data
  try {
    const networkingData = await Networking.findAll({
      include: [{ model: User }]
    });
    res.status(200).json(networkingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new networkingEvent
  try {
    const networkingData = await Networking.create(req.body);
    res.status(200).json(networingData);
  } catch (err) {
    res.status(400).json(err);
  };
});

router.delete('/:id', async (req, res) => {
  //delete a networking event by its id value
  try {
    const networkingData = await Networking.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!networkingData) {
        res.status(404).json({ message: 'No networking event found with this id!' });

      return;
    }
    res.status(200).json(networkingData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  //update a networking event by its id value
  try {
    const networkingData = await Networking.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!networkingData) {
 res.status(404).json({ message: 'No networking event found with this id!' });
      return;
    }
    res.status(200).json(networkingData);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
