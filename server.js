const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require("./config/connection.js");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// syncED sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});


//insomnia you'll need this http://localhost:3001/api/categories/2