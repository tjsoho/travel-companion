const User = require('./user');
const Tour = require('./tour');

User.hasMany(Tour, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Tour.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Tour };