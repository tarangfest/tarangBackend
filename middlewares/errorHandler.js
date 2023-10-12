const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "server error",
    statusCode: err.statusCode || 500,
  });
};
module.exports = errorHandler;
