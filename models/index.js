const User = require('../models/user');
const Tour = require('../models/tour');

User.hasMany(Tour, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Tour.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Tour };