const app = require("./app");
const env = require("./config/env");

const server = app.listen(env.port, () => {
  console.log(`FeaturePilot API running on port ${env.port}`);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err.message);
  process.exit(1);
});