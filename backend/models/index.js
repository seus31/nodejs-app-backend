'use strict'

const fp = require('fastify-plugin')
const User = require('./userModel')

module.exports = fp(async function (fastify, opts) {
  const sequelize = fastify.sequelize

  const models = {
    User: User(sequelize),
  }

  fastify.decorate('models', models)
}, { dependencies: ['dbConnector'] })
