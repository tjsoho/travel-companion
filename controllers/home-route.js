const router = require('express').Router();
const { Tour, User } = require('../models');
const withAuth = require('../utils/auth');
// const withAuth = require('../../utils/auth');


// this route is for displaying the handlebars with any variables recieved from the database
// this route does only GETS and then does res.render
// API routes only do put, post, delete
// this route interacts with the database models

router.get('/tours/:id', async (req, res) => {
  try {
    const tours = await Tour.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });
    const tourData = tours.get({ plain: true });
    if (!tourData) {
      res.status(404).json({ message: 'No tour found with this id!' });
      return;
    }

    res.render('tour-detail', {
      tourData,
      logged_in: req.session.logged_in,
    });
    // res.status(200).json(tourData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const tourData = await Tour.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],

    });
    const tours = tourData.map((tour) => tour.get({ plain: true }));
    //TO DO: res.render page of all tours
    // console.log(tourData);
    res.render('homepage', {
      tours,
      logged_in: req.session.logged_in,
    });
    // res.status(200).json(tourData);
  } catch (err) {
    res.status(400).json(err);
  }
});



router.get('/login', (req, res,) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {
    logged_in: req.session.logged_in,
  });
});

router.get('/signup', (req, res,) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup', {
    logged_in: req.session.logged_in,
  });
});

// get and render create tour form
// router.get('/userpage', withAuth, async (req, res) =>{
//   res.render('create', {
//     logged_in: req.session.logged_in,
//     user_id: req.session.user_id
//   });
// });

// get and render create tour form fixed version
router.get('/userpage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Tour }],
    });

    const user = userData.get({ plain: true });

    const createTour = true;
    res.render('create', {
      ...user,
      logged_in: req.session.logged_in,
      createTour
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get and render update page
router.get('/update/:id', withAuth, async (req, res) => {
  try {
    const tourData = await Tour.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });

    const tour = tourData.get({ plain: true });
    // console.log(tour);

    res.render('update', {
      ...tour,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get combo params
router.get('/tours/:category/:location', async (req, res) => {

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

      const category = req.params.category;
      const location = req.params.location;
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      console.log(location)
      console.log(category)

      res.render('homepage', { 
        tours,
        logged_in: req.session.logged_in,
        category,
        location,
      });
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


module.exports = router;