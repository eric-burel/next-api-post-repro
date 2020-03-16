// @see https://github.com/zeit/next.js/tree/master/examples/api-routes-apollo-server-and-client-auth
import express from "express";
import cors from "cors";
//import bodyParser from "body-parser";
import { bodyParserGraphQL } from "body-parser-graphql"; // supports application/graphql

// import initDb from "~/server/middlewares/initDb";

const app = express();
app.use(cors());
app.use(bodyParserGraphQL()); // JSON + application/graphql support
app.use("/api/test", (req, res) => {
  console.log("hitting test endpoint", req.method);
  if (req.method === "POST") {
    res.end("POST success");
  } else {
    res.end("Success");
  }
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default app;
