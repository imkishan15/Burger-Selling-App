var mongoose = require('mongoose');
var dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Basic database connection
mongoose.connect(process.env.URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
   authSource: 'admin'
})
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
