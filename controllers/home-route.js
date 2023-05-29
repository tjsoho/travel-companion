const router = require('express').Router();
const { Tour, User } = require('../models');
const withAuth = require('../utils/auth');
// const withAuth = require('../../utils/auth');


// this route is for displaying the handlebars with any variables recieved from the database
// this route does only GETS and then does res.render
// API routes only do put, post, delete
// this route interacts with the database models

// router.get('/', async (req, res) => {

//   res.redirect('/tours');

// });

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
      loggedIn: req.session.logged_in,
    });
    // res.status(200).json(tourData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const tours = await Tour.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],

    });
    const tourData = tours.map((tours) => tours.get({ plain: true }));
    //TO DO: res.render page of all tours
    // console.log(tourData);
    res.render('top', {
      tourData,
      loggedIn: req.session.logged_in,
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
    loggedIn: req.session.logged_in,
  });
});

router.get('/signup', (req, res,) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup', {
    loggedIn: req.session.logged_in,
  });
});

// get and render create tour form
// router.get('/userpage', withAuth, async (req, res) =>{
//   res.render('create', {
//     loggedIn: req.session.logged_in,
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


    res.render('create', {
      ...user,
      logged_in: true
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



module.exports = router;