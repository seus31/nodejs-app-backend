const userService = require('../services/userService');

async function createUser(fastify, req, reply) {
  const newUser = await userService.createUser(fastify, req.body);
  reply.code(201).send(newUser);
}

async function getUsers(fastify, req, reply) {
  const users = await userService.getUsers(fastify, req.query);
  reply.code(200).send(users);
}

module.exports = {
  createUser,
  getUsers,
};
