import server from "./start/kernel/app";

server.listen(3333, () => {
  console.log("Server started on port 3333");
});
