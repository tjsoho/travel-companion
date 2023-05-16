const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// check this setup of handlebars is correct
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {console.log(`App listening on port ${PORT}!`);
});
});


