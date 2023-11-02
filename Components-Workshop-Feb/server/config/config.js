const { PORT, DB_NAME, DB_CONNECTION } = process.env;

module.exports = {
  port: PORT || 5173,
  dbConnection: `${DB_CONNECTION}/${DB_NAME}`,
};
