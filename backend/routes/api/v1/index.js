'use strict'

const { createUser, getUsers, getUser, updateUser, deleteUser } = require('../../../controllers/userController');

module.exports = async function (fastify, opts) {
  fastify.post('/users', {
    schema: {
      body: {
        type: 'object',
        required: ['name', 'email', 'password'],
        properties: {
          name: {type: 'string'},
          email: {type: 'string', format: 'email'},
          password: {type: 'string'},
        }
      }
    },
    handler: async (request, reply) => createUser(fastify, request, reply)
  });
  fastify.get('/users', async (request, reply)=> getUsers(fastify, request, reply));
  fastify.get('/users/:id', async (request, reply)=> getUser(fastify, request, reply));
  fastify.put('/users/:id', {
    schema: {
      body: {
        type: 'object',
        properties: {
          name: {type: 'string'},
          email: {type: 'string', format: 'email'},
        }
      }
    },
    handler: async (request, reply)=> updateUser(fastify, request, reply)
  });
  fastify.delete('/users/:id', async (request, reply)=> deleteUser(fastify, request, reply));
}
