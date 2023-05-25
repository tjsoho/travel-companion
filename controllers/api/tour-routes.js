const router = require('express').Router();
const { Tour } = require('../../models');

const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    console.log("posting!----------------------")
    const newTour = await Tour.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTour);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tourData = await Tour.update(req.body, {
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!tourData) {
      res.status(404).json({ message: 'No tour found with this id!' });
      return;
    }

    res.status(200).json(tourData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {

    console.log("hello")
    const deletedTour = await Tour.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    console.log(deletedTour)
    if (!deletedTour) {
      res.status(404).json({ message: 'No tour found with this id!' });
      return;
    }

    res.status(200).json(deletedTour);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;