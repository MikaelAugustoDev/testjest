require("dotenv/config");
import express from "express";
const app = express();

const Port = process.env.PORT;

app.listen(Port, () => {
	console.log(`Servidor rodando em http://localhost:${Port}`);
});