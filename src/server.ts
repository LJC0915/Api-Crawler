import {apiPages, clearApiPages} from "./data/apiPages";
import {getAllApiPages} from "./utils";
import express from "express";
import axios from "axios";
import {parseApi} from "./parsers";

const app = express();
const port = 3000;

app.get("/pages", (req, res) => {
  res.send(JSON.stringify(apiPages));
});

app.get("/updatePage", (req, res) => {
  clearApiPages();
  getAllApiPages();
  res.send("updatePage");
});

app.get("/updateApi", (req, res) => {
  getApi(apiPages[0].url);
  res.send("updateApi");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function getApi(pageName: string) {
  const Domain = "http://api.winner7788u.com/doc/" + pageName;
  axios
    .get(Domain)
    .then(function(response) {
      // handle success
      if (response.status === 200) {
        parseApi(response.data, pageName);
      }
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
      return null;
    });
}
