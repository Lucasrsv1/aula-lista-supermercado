const express = require("express");

const routes = require("./routes");

const app = express();
const roteador = express.Router();

app.use(express.json());

app.set("port", 3030);
app.use("/api", roteador);

routes(roteador);

app.listen(app.get("port"), function () {
	console.log("Servidor online na porta " + app.get("port"));
});
