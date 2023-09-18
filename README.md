# E-Commerce Back-End

  [![License](https://img.shields.io/badge/License-MIT-orange.svg)](https://choosealicense.com/licenses/mit/)

  ## Description

  This project uses the `Express.js`, `Sequelize`, `MySQL 2` and `DotEnv` node packages to build the back-end of an e-commerce site. The app has the following capabilities:

 * adding a database name, MySQL username, and MySQL password to an environment variable file connects to a database using Sequelize
 * entering schema and seed commands creates a development database and seeds it  with test data
 * entering the command to invoke the application starts the server and the Sequelize models are synced to the MySQL database
 * opening API GET routes in Insomnia for categories, products, or tags displays the data for each of these routes in a formatted JSON
 * testing API POST, PUT, and DELETE routes in Insomnia successfully creates, updates, and deletes data in the database

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  1. If not already installed, download [Node.js](https://nodejs.org/en/download) and [Git](https://git-scm.com) (if using Windows)
  
  2. Clone the `e-commerce-back-end` repository to your machine from the command line (Git Bash on Windows) or terminal (Mac)
  
  ```bash
      git clone git@github.com:pinkhaze/e-commerce-back-end
  ```

  3. In your code editor of choice, navigate to the `e-commerce-back-end` repository

  4. Open a new terminal and type the following command to initialize a new Node project:

  ```bash
      npm init -y
  ```

  5. Type the following command to install the `express`, `dotenv`, `mysql2` and `sequelize` packages:

  ```bash
      npm i express
      npm i dotenv
      npm i mysql2
      npm i sequelize
  ```

  6. In a separate terminal, type the following command to connect to mySQL and then enter your password:

  ```bash
      mysql -u root -p
  ```

  7. Source the schema by typing the following command:

  ```bash
      source db/schema.sql
  ```

  8. In the other terminal, type the following command to seed the data:

  ```bash
      node seeds/index.js
  ```

  9. Start the application by entering the following command:

  ```bash
      node server.js
  ```

  ## Usage

  [E-Commerce Back-End Video Walk-Through](https://github.com/pinkhaze/e-commerce-back-end/assets/55771228/1b9e9a5c-2ab9-4797-8c80-8dc4427d65d7)

  ## Credits

  [Module 13 Mini Project](https://git.bootcampcontent.com/University-of-Minnesota/UofM-VIRT-FSF-PT-04-2023-U-LOLC-ENTG/-/tree/main/13-ORM/01-Activities/28-Stu_Mini-Project)

  ## License

  [MIT License](https://choosealicense.com/licenses/mit/)

  ## Contribute

  NA
  
  ## Tests

  NA

  ## Questions

  Check out the other projects on my GitHub profile at [pinkhaze](https://github.com/pinkhaze).
