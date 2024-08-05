'use strict'

const { createUser, getUsers, getUser } = require('../../../controllers/userController');

module.exports = async function (fastify, opts) {
  fastify.post('/users', async (request, reply) => createUser(fastify, request, reply));
  fastify.get('/users', async (request, reply)=> getUsers(fastify, request, reply));
  fastify.get('/users/:id', async (request, reply)=> getUser(fastify, request, reply));
}
