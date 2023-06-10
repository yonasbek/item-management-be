const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
 process.env.PG_DATABASE,
 process.env.PG_USER,
 process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: 'postgres' 
  }
);

const Item = sequelize.define('item', {
  qr_id: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  model: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  serial_number: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  quantity: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  functionality: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  organization_name: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  focal_person_name: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  focal_person_number: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
}, {
    freezeTableName: true
  });

module.exports = Item;
