const router = require('express').Router();
const { Tour, User } = require('../../models');

const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
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
    // console.log("getting!----------------------")
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

// router.get('/:difficulty_level', async (req, res) => {
//   try {
//     const tourData = await Tour.findAll({
//       where: {
//         difficulty_level: req.params.difficulty_level,
//       },
//     });

//     if (!tourData) {
//       res.status(404).json({ message: 'No tour found with this difficulty level!' });
//       return;
//     }

//     res.status(200).json(tourData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/category/:category', async (req, res) => {

//   const parseCategory = req.params.category.split('-').join(' ');
//   console.log(parseCategory);
//   try {
//     const tourData = await Tour.findAll({
//       where: {
//         category: parseCategory,
//       },
//     });

//     if (!tourData) {
//       res.status(404).json({ message: 'No tour found with this category!' });
//       return;
//     }

//     res.status(200).json(tourData);
//   } catch (err) {
//     res.status(500).json(err);
//     console.log(err);
//   }
// });





// router.get('/location/:location', async (req, res) => {
//   const parseLocation = req.params.location.split('-').join(' ');
//   try {
//     const tourData = await Tour.findAll({
//       where: {
//         location: parseLocation,
//       },
//     });

//     if (!tourData) {
//       res.status(404).json({ message: 'No tour found with this location!' });
//       return;
//     }

//     res.status(200).json(tourData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });




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

    // console.log("hello")
    const deletedTour = await Tour.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
        // this is why delete wasn't working on insomnia
      },
    });

    console.log(deletedTour)
    if (!deletedTour) {
      res.status(404).json({ message: 'No tour found with this id!' });
      return;
    }

    res.status(200).json(deletedTour);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/:category/:location', async (req, res) => {

  console.log(req.params);
  try {
      // Get all tours and JOIN with user data

      let tourData;
      // TO DO: !!!!! order from last to first?
      if (req.params.category === 'all') {
          tourData = await Tour.findAll({
              where: {
                  location: req.params.location,
              },
              include: [{ model: User }],
          });
      } else {
          tourData = await Tour.findAll({
              where: {
                  category: req.params.category,
                  location: req.params.location,
              },
              include: { model: User },
          });
      }
      // Serialize data so the template can read it
      const tours = tourData.map((post) => post.get({ plain: true }));
      console.log(tours);
      // TO DO: order from soonest to latest?

      res.render('top', { tours });
      // Pass serialized data and session flag into template
      // res.json(tours);
          // logged_in: req.session.logged_in,
          // user_id: req.session.user_id,
      // });
  } catch (err) {
      res.status(500).json(err);
      console.log(err);
  }
});



// get results by location



module.exports = router;