// import Express.js
const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

// import models to sync tables with database
const Category = require('./models/Category');
const Product = require('./models/Product');
const ProductTag = require('./models/ProductTag');
const Tag = require('./models/Tag');

// initialize an instance of Express.js
const app = express();
const PORT = process.env.PORT || 3001;

// 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

// remove 'force: true' when done