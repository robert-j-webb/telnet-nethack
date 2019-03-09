const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

// body parsing middleware
app.use(express.json());

app.get('/', async (req, res) => {
  
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
  next();
});

app.listen(port, () => {
  console.log('init');
});

module.exports = app;
