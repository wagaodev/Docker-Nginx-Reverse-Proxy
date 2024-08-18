const express = require("express");
const faker = require("faker");
const mysql = require("mysql");

const app = express();
const port = process.env.APP_PORT || 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  const name = faker.name.findName();

  connection.query(
    `INSERT INTO people (nome) VALUES (?)`,
    [name],
    (insertError) => {
      if (insertError) {
        console.error("Erro ao inserir dados:", insertError);
        return res.status(500).send("Erro ao inserir dados no banco de dados.");
      }

      connection.query(`SELECT nome FROM people`, (selectError, results) => {
        if (selectError) {
          console.error("Erro ao recuperar dados:", selectError);
          return res
            .status(500)
            .send("Erro ao recuperar dados do banco de dados.");
        }

        const nameList = results.map((el) => `<li>${el.nome}</li>`).join("");
        res.send(`
          <h1>Full Cycle Rocks!</h1>
          <ol>${nameList}</ol>
        `);
      });
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
