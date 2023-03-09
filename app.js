const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/app.html") {
    fs.readFile("./app.html", (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting file: ${err}`);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(html);
        res.end();
      }
    });
  } else if (req.url === "/about_us.html") {
    fs.readFile("./about_us.html", (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting file: ${err}`);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(html);
        res.end();
      }
    });
  } else if (req.url === "/contact_us.html") {
    fs.readFile("./contact_us.html", (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting file: ${err}`);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(html);
        res.end();
      }
    });
  } else if (req.url === "/inquiry.html") {
    fs.readFile("./inquiry.html", (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting file: ${err}`);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(html);
        res.end();
      }
    });
  } else if (req.url === "/help.html") {
    fs.readFile("./help.html", (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting file: ${err}`);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.write(html);
        res.end();
      }
    });
  } else {
    fs.readFile("./app.css", (err, html) => {
      if (err) {
        res.statusCode = 500;
        res.end(`Error getting file: ${err}`);
      } else {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/css");
        res.write(html);
        res.end();
      }
    });
  }
});

server.listen(6969, () => {
  console.log("server listening on port 6969 kekw");
});
