import {apiPages, clearApiPages, getApiData} from "./data/apiPages";
import {getAllApi} from "./utils";
import cors from "cors";
import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/dist/index.html"));
});

app.get("/api/:apiName", (req, res) => {
  const response = getApiData("/" + req.params.apiName + "/");
  console.log({request: req.params.apiName, response});
  res.send(response);
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

getAllApi();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
