const router = require('express').Router();
const { Study, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const studyTips = await Study.findAll();
    res.render('study', { studyTips });
    console.log(studyTips);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const studyTip = await Study.findOne({
      where: {
        id: req.params.id
      },
      include: [
        { model: User, attributes: ['user_name'] }
      ]
    });
    res.status(200).json(studyTip);
    console.log(studyTip);
  } catch (err) { 
    res.status(500).json(err);
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
    await Study.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const updatedStudyTip = await Study.findByPk(req.params.id);
    res.json(updatedStudyTip);
  } catch (err) {
    next(err);
  }
});

module.exports = router;