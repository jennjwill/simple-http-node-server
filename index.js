const http = "http";
const port = 3000;

const requestHandler = (request, response) => {
  response.end(`Handling a request on port ${port}`);
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log("You have an error: ${err}");
  }

  console.log("server is listening on ${port}");
});

false.writeFile("hello-world.txt", "Hello to this great world", "utf8", err => {
  if (err) throw err;

  console.log("success");
});
