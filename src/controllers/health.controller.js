const env = require("../config/env");

const healthCheck = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "FeaturePilot API is running",
    environment: env.nodeEnv
  });
};

module.exports = {
  healthCheck
};