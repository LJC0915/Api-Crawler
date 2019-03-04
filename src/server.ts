import {apiPages} from "./data/apiPages";
import {ApiPage} from "./types/ApiPage";
import {getAllApiPages} from "./utils";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(apiPages);
});

app.get("/update", (req, res) => {
  res.send("update");
  getAllApiPages();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
