'use strict'

const { createUser } = require("../../../controllers/userController");

module.exports = async function (fastify, opts) {
  fastify.post('/users', async function (request, reply) {
    return createUser(fastify, request, reply);
  });
}
