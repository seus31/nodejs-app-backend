async function createTask(fastify, taskData) {
  return fastify.models.Task.create(taskData);
}

module.exports = {
  createTask,
};
