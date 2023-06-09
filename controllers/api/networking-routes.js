const router = require("express").Router();
const { Networking, User } = require('../../models');

//these are the routes for the api/memes endpoint
// this is a test afdsfadfsd



router.get('/', async (req, res) => {
  try {
      const networkingData = await Networking.findAll();
      res.render('networking', { networkingData }); 
      res.status(200).json(networkingData);
      console.log(networkingData);
  } catch (err) {
      res.status(500).json(err);
}});


router.post('/', async (req, res) => {

    try{
        const networkingData = await Networking.create({
            location: req.body.location,
            event_name: req.body.event_name,
            date: req.body.date,
            photo: req.body.photo,
        });

        console.log(networkingData);
        res.status(200).json(networkingData);
        console.log(networkingData);
    } catch (err) {
      console.log(err);
        res.status(400).json(err);
}});


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
