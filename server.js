const port = process.env.PORT || 3000;
const express = require("express");
const next = require("next");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

const initServer = async () => {
  await app.prepare();
  const server = express();

  server.get("*", (req, res) => handle(req, res));
  return server;
};

(async () => {
  const server = await initServer();
  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
