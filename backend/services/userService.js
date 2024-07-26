async function createUser(fastify, userData) {
  return fastify.models.User.create(userData);
}

module.exports = {
  createUser,
};
