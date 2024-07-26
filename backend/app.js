'use strict'

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')
require('dotenv').config()

const options = {}

module.exports = async function (fastify, opts) {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(require('./models'))

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })}

module.exports.options = options
