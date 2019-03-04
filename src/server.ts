import {apiPages, clearApiPages} from "./data/apiPages";
import {getAllApiPages} from "./utils";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(apiPages);
});

app.get("/update", (req, res) => {
  clearApiPages();
  getAllApiPages();
  res.send("update");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
