'use strict'

const { createUser, getUsers } = require('../../../controllers/userController');

module.exports = async function (fastify, opts) {
  fastify.post('/users', async (request, reply) => createUser(fastify, request, reply));
  fastify.get('/users', async (request, reply)=> getUsers(fastify, request, reply));
}
