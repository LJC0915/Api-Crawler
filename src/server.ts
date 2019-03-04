import {apiPages, clearApiPages, getApiData} from "./data/apiPages";
import {getAllApi} from "./utils";
import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/dist/index.html"));
});

app.get("/api/:apiName", (req, res) => {
  res.send(getApiData("/" + req.params.apiName + "/"));
});

app.get("/apis", (req, res) => {
  if (apiPages.length === 0) {
    getAllApi();
    res.send("Please refresh the page");
  } else {
    res.send(JSON.stringify(apiPages));
  }
});

app.get("/updateApi", (req, res) => {
  clearApiPages();
  getAllApi();
  res.send("updatePage");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
