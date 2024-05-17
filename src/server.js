import { Model, RestSerializer, Server } from "miragejs";

const server = new Server({
  namespace: "/api",
  models: {
    transaction: Model
  },
  routes() {
    this.resource("transactions");
    // Allow unhandled requests on the current domain to pass through
    this.passthrough();
  },
  seeds(server) {
    server.create("transaction", { text: "Flower", amount: -20 });
    server.create("transaction", { text: "Salary", amount: 300 });
    server.create("transaction", { text: "Book", amount: -10 });
    server.create("transaction", { text: "Camera", amount: 150 });
  },
  serializers: {
    application: RestSerializer
  }
});

export default server;
