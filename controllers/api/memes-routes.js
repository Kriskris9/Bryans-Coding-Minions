const router = require("express").Router();
const { Memes, User } = require('../../models');

//these are the routes for the api/memes endpoint
//the api/memes endpoint

router.get('/', async (req, res) => {
  //find all memes
  //include the associated user data
  try {
    const memesData = await Memes.findAll({
      include: [{ model: User }]
    });
    res.status(200).json(memesData);
    res.render('memes', {memesData});
  } catch (err) {
    res.status(500).json(err);
  }
});




// router.get('/', async (req, res) => {
//   try {
//     const studyTips = await Study.findAll();
//     include : [{ model: User, attributes: ['user_name'] }]
//     res.render('study', { studyTips });
//     console.log(studyTips);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.post('/', async (req, res) => {
  // create a new meme
  try {
    const memeData = await Memes.create({
      title: req.body.title,
      description: req.body.description,
      photo: req.body.photo,
      gif: req.body.gif,
      video: req.body.video,
      link: req.body.link,
      user_id: req.body.user_id,
  });
  console.log(memeData);
    res.status(200).json(memeData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  //delete a meme by its id value
  try {
    const memeData = await Memes.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!memeData) {
      res.status(404).json({ message: 'No meme found with this id!' });
      return;
    }
    res.status(200).json(memeData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  //update a meme by its id value
  try {
    const updatedMeme = await Memes.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!updatedMeme) {
      res.status(404).json({ message: 'No meme found with this id!' });
      return;
    }
    res.status(200).json(updatedMeme);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
