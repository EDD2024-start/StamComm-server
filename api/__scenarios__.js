const seedData = require('../seed-data.js');

module.exports = {
  scenarios: {
    default: {
      users: seedData.users,
      events: seedData.events,
      stamps: seedData.stamps,
      userStamps: seedData.userStamps
    }
  }
};