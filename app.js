const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api/recipes', require('./routes/api/recipes.routes'));

const start = async() => {
  try {
    await mongoose.connect(config.get('mongoURI'),{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (error) {
    console.log('Server Error', error.message);
    process.exit(1);  
  }
};

start();
