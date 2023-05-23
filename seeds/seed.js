const sequelize = require('../config/connection');
const { User, Tour } = require('../models');

const userData = require('./user-seed.json');
const tourData = require('./tour-seed.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const tour of tourData) {
        await Tour.create({
            ...tour,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();