const router = require('express').Router();
const { parse } = require('handlebars');
const { Tour, User } = require('../../models');

const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log("posting!----------------------")
    const newTour = await Tour.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newTour);
    res.status(200).json(newTour);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    console.log("getting!----------------------")
    const tourData = await Tour.findAll({
      // where: {
      //   user_id: req.session.user_id,
      // },
    });

    res.status(200).json(tourData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:difficulty_level', async (req, res) => {
  try {
    const tourData = await Tour.findAll({
      where: {
        difficulty_level: req.params.difficulty_level,
      },
    });

    if (!tourData) {
      res.status(404).json({ message: 'No tour found with this difficulty level!' });
      return;
    }

    res.status(200).json(tourData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/category/:category', async (req, res) => {

  const parseCategory = req.params.category.split('-').join(' ');
  console.log(parseCategory);
  try {
    const tourData = await Tour.findAll({
      where: {
        category: parseCategory,
      },
    });

    if (!tourData) {
      res.status(404).json({ message: 'No tour found with this category!' });
      return;
    }

    res.status(200).json(tourData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});





router.get('/location/:location', async (req, res) => {
  const parseLocation = req.params.location.split('-').join(' ');
  try {
    const tourData = await Tour.findAll({
      where: {
        location: parseLocation,
      },
    });

    if (!tourData) {
      res.status(404).json({ message: 'No tour found with this location!' });
      return;
    }

    res.status(200).json(tourData);
  } catch (err) {
    res.status(500).json(err);
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
        user_id: req.session.user_id,
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

// get results by location



module.exports = router;