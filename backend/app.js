'use strict'

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')
require('dotenv').config()
const cors = require('@fastify/cors');

const options = {}

module.exports = async function (fastify, opts) {
  fastify.register(cors, {
    origin: ['http://localhost:4242', 'http://localhost:4200', 'http://localhost:4000', 'http://localhost:3999'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  });

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(require('./models'))

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

module.exports.options = options
