const taskService = require('../services/taskService');

async function createTask(fastify, req, reply) {
  const newTask = await taskService.createTask(fastify, req.body);
  reply.code(201).send(newTask);
}

module.exports = {
  createTask,
};
