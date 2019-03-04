import {apiPages, clearApiPages} from "./data/apiPages";
import {getAllApi} from "./utils";
import express from "express";

const app = express();
const port = 3000;

app.get("/pages", (req, res) => {
  res.send(JSON.stringify(apiPages));
});

app.get("/updateApi", (req, res) => {
  clearApiPages();
  getAllApi();
  res.send("updatePage");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
