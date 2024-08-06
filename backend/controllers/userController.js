const userService = require('../services/userService');

async function createUser(fastify, req, reply) {
  const newUser = await userService.createUser(fastify, req.body);
  reply.code(201).send(newUser);
}

async function getUsers(fastify, req, reply) {
  const users = await userService.getUsers(fastify, req.query);
  reply.code(200).send(users);
}

async function getUser(fastify, req, reply) {
  const user = await userService.getUserById(fastify, req.params.id);
  reply.code(200).send(user);
}

async function updateUser(fastify, req, reply) {
  const user = await userService.updateUser(fastify, req.params.id, req.body);
  reply.code(200).send(user);
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
};
