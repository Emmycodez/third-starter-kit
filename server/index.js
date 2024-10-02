import express from "express";
import dotenv from "dotenv";
import { jwtVerify } from "@kinde-oss/kinde-node-express";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use((request, response, next) => {
response.header("Access-Control-Allow-Origin", "*");
response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
response.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
next();
});

const jwtVerifier = jwtVerify('https://funnelflow.kinde.com', {
  audience: ""
})

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/api/protected",jwtVerifier, (request, response) => {
  response.json({
    message:"This is protected data"
  });
})

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
