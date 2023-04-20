const router = require('express').Router();
const {Study} = require('../db/models');


//these are the routes for the /api/study routes

//get all study tips
router.get('/', async (req, res, next) => {
  try {
    const studyTips = await Study.findAll();
    res.json(studyTips);
  } catch (err) {
    next(err);
  }
});

//get one study tip
router.get('/:id', async (req, res, next) => {
  try {
    const studyTip = await Study.findByPk(req.params.id);
    res.json(studyTip);
  } catch (err) {
    next(err);
  }
});

//create a new study tip
router.post('/', async (req, res, next) => {
  try {
    const newStudyTip = await Study.create(req.body);
    res.json(newStudyTip);
  } catch (err) {
    next(err);
  }
});

//update a study tip
router.put('/:id', async (req, res, next) => {
  try {
    const updatedStudyTip = await Study.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(updatedStudyTip);
  } catch (err) {
    next(err);
  }
});


module.exports = router;