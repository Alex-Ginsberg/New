/*
  Use this file to construct your tables and add them to the db
*/

const Sequelize = require('sequelize')
const db = require('../db')

const User = require('./user')

module.exports = {
  User
}
