import app from "./start/kernel/app";
import 'dotenv/config';

const clients: any[] = [];

app.io.on('connect', (client) => {
  console.log(`Client connected ${client.id}`);
  clients.push(client);

  client.on('disconnect', () => {
    clients.splice(clients.indexOf(client), 1)
    console.log(`${client.id} disconnected`)
  })
})


app.server.listen(3333, () => {
  console.log("Server started on port 3333");
});
