import server from "./start/kernel/app";

// const clients: any[] = [];

// app.io.on('connect', (client) => {
//     console.log(`Client connected ${client.id}`);
//     clients.push(client);

//     app.io.on('disconnect', () => {
//       clients.splice(clients.indexOf(client), 1)
//       console.log(`${client.id} disconnected`)
//     })
// })


server.listen(3333, () => {
  console.log("Server started on port 3333");
});
