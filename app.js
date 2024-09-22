require("dotenv").config();

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const fs = require("fs");
let directory_name = "./";
let filenames = fs.readdirSync(directory_name);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  f = "";
  filenames.forEach((file) => {
    f += file + "\n";
  });
  res.end(f);
});

// Shared Secret Files
const secret_key = process.env.SECRET_KEY;
console.log(`my secret password is ${secret_key}`);

server.listen(port, hostname, () => {});
