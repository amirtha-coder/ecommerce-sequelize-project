const express = require("express");

const routes = require("./routes");

const connection = require("./config/connection");

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log("trial");

app.use(routes);

// sync sequelize models to the database, then turn on the server

const init = async () => {
  try {
    // connect to db
    // allows changes not be overwitten and forgotten
    await connection.sync({ force: false });
    // server listen on PORT
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR] failed to start server | ${error.message}`);
  }
};

init();
