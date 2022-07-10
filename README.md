# ecommerce-sequelize-project<br>![MIT badge](https://img.shields.io/badge/MIT-License-green)

A sequelize project that seeds in the category, product and tag.

<br>

## Contents Table

- [User Journey](#user-journey)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies/ Packages](#technologies-used)
- [License](#license)
- [Questions](#questions)

<br>

# Demonstration Video

Please click [here](https://www.loom.com/share/80b15c79ba20484ba7b83a784954e3a5) to view.

<br>

## User Journey

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Postman for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Postman
THEN I am able to successfully create, update, and delete data in my database
```

<br>

## Installation

Please follow the instructions below:

```
git clone git@github.com:amirtha-coder/ecommerce-sequelize-project.git
cd ecommerce-sequelize-project
npm i
```

### Database Setup

Open an integrated terminal from db directory. Then run:

```

mysql -u root -p

source schema.sql

```

<br>

## Usage

Please follow the instructions below:

```
npm run start
```

<br>

## Technologies used

- Node
- dotenv
- mysql2
- sequelize
- express
- Postman

<br>

## License

MIT License

<br>

## Questions

Visit my GitHub profile [here](https://github.com/amirtha-coder)
