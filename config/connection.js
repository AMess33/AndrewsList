const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "127.0.0.1",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// const sequelize{
//   if (process.env.JAWSDB_URL) {
//     sequelize = new Sequelize(process.env.JAWSDB_URL);
//   } else {
//     sequelize = new Sequelize(
//       process.env.DB_NAME,
//       process.env.DB_USER,
//       process.env.DB_PASSWORD,
//       {
//         host: "127.0.0.1",
//         dialect: "mysql",
//         port: 3001,
//       }
//     );
//   }
// };

module.exports = sequelize;
