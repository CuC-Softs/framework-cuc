import server from "../src/start/kernel/app";

server.listen(3333, () => {
  console.log("Server started on port 3333");
});
