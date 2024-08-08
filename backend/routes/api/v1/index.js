'use strict'

const { createUser, getUsers, getUser, updateUser, deleteUser } = require('../../../controllers/userController');
const { createTask } = require('../../../controllers/taskController');

module.exports = async function (fastify, opts) {
  /**
   * tasks CRUD API routes.
   */
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

  /**
   * tasks CRUD API routes.
   */
  fastify.post('/tasks', {
    schema: {
      body: {
        type: 'object',
        required: ['taskName', 'status'],
        properties: {
          taskName: {type: 'string'},
          status: {type: 'number'},
        }
      }
    },
    handler: async (request, reply) => createTask(fastify, request, reply)
  });
}
