const router = require('express').Router();
const { Tour } = require('../../models/tour');
// const withAuth = require('../../utils/auth');


// this route is for displaying the handlebars with any variables recieved from the database
// this route does only GETS and then does res.render
// API routes only do put, post, delete
// this route interacts with the database models

router.get('/tours', async (req, res) => {
    try {
      const tours = await Tour.findAll ({
       
      });
  
      //TO DO: res.render page of all tours

      res.status(200).json(tours);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.get('/tours/:id', async (req, res) => {
    try {
      const tourData = await Tour.findbyPK({
        where: {
          id: req.params.id,
        },
      });
  
      if (!tourData) {
        res.status(404).json({ message: 'No tour found with this id!' });
        return;
      }
  
      //TO DO: res.render one tour
      
      res.status(200).json(tourData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;