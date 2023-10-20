function maintenanceMiddleware(req, res, next) {
  const isMaintenanceEnabled = false; // Set this to true or false based on your maintenance mode status

  if (isMaintenanceEnabled) {
    return res.status(503).send({
      success: false,
      message:
        "We're currently undergoing maintenance. Please try again later.",
    });
  }
  next();
}

module.exports = maintenanceMiddleware;
