const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const conexiune = mysql.createConnection({
  host: "",
  user: "root",
  password: "1234",
  database: "test",
});
app.use(cors({ origin: "http://localhost:4200" }));
app.use(bodyParser.json());
conexiune.connect((eroare) => {
  if (eroare) {
    console.error("eroare la conectare cu baza de date" + eroare.stack);
    return;
  }
  console.log("conectat la baza de date cu id " + conexiune.threadId);
});
app.get("/api/personaje", (req, res) => {
  conexiune.query("select*from personaje", (eroare, result) => {
    if (eroare) {
      res.status(500).json({ eroare: "eroare interna de la server" });
      return;
    }
    console.log(result);
    res.json(result);
  });
});
app.post("/api/personaje", (req, res) => {
  const { nume, varsta } = req.body;
  conexiune.query(
    "insert into personaje(nume,varsta) values(?,?)",
    [nume, varsta],
    (eroare) => {
      if (eroare) {
        res.status(500).json({ error: "eroare de la servar" });
        return;
      }
      console.log("date adaugate cu succes");
      res.status(200).json({ message: "date adaugate cu succes" });
    }
  );
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("servearul este activ pe portul" + port);
});
