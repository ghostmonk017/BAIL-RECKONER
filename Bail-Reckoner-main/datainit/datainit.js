const mongoose = require('mongoose');
const Offense = require('./models/Offense');

mongoose.connect('mongodb://localhost/bailCheckerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const offenses = [
  { section: 302, offense: 'Murder', bailable: false },
  { section: 307, offense: 'Attempt to Murder', bailable: false },
  { section: 323, offense: 'Voluntarily Causing Hurt', bailable: true },
  { section: 376, offense: 'Rape', bailable: false },
  // Add more offenses here
];

Offense.insertMany(offenses)
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
