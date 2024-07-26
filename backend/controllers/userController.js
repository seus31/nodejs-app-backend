const userService = require('../services/userService');

async function createUser(fastify, req, reply) {
  const newUser = await userService.createUser(fastify, req.body);
  reply.code(201).send(newUser);
}

module.exports = {
  createUser,
};
