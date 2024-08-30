const jsonServer = require("json-server"); // importing json-server library cyclic api
const cors =require("cors")
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

app.use(cors())

const uri ="mongodb+srv://285rajkumarvishwakarma8759:DQtVbRjlYFXFvT6H@cluster0.isybh.mongodb.net/"
server.use(middlewares);
server.use(router);

server.listen(port);
