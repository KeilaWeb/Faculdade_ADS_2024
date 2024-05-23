const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const port = 3000;

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "api",
};


app.get("/produto", async (req, res) => {
  const connection = await mysql.createConnection(dbConfig);

connection.connect((error) => {
  if(error) throw error;
  console.log("Banco conectado com sucesso")
});

const [rows] = await connection.query("SELECT * FROM produto");
await connection.end();

  res.send(rows);
});


app.get("/", (req, res) => {
  res.send("Vai Curinthias");
})

app.listen(port, () => {
  console.log(`Servidor online em http://localhost:${port}`);
});
