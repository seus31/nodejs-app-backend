async function createUser(fastify, userData) {
  return fastify.models.User.create(userData);
}

async function getUsers(fastify, queryData) {
  const page = parseInt(queryData.page, 10) || 1;
  const limit = parseInt(queryData.limit, 10) || 10;
  const offset = (page - 1) * limit;
  const { count, rows } = await fastify.models.User.findAndCountAll({
    limit: limit,
    offset: offset,
    order: [['createdAt', 'ASC']]
  });

  return {
    users: rows,
    totalItems: count,
    currentPage: page,
    limit: limit,
    totalPages: Math.ceil(count / limit)
  };
}

module.exports = {
  createUser,
  getUsers,
};
