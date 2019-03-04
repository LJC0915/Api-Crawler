import axios from "axios";
import cheerio from "cheerio";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
  crawler();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function crawler() {
  axios
    .get("http://api.winner7788u.com/doc/apiLearnPage_user.php")
    .then(function(response) {
      // handle success
      if (response.status === 200) {
        parseApi(response.data);
        parseSubPage(response.data);
      }
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
}

function parseApi(responseData: any): void {
  const $ = cheerio.load(responseData);
  const Apis = $("table.table tr td");
  Apis.each((index, api) => {
    const parseApi = cheerio.load(api);
    const title = parseApi("div div b").text();
    const url = parseApi("div div")
      .first()
      .contents()
      .last()
      .text()
      .trim();
    console.log({title, url});
  });
}

function parseSubPage(responseData: any): void {
  const $ = cheerio.load(responseData);
  const Pages = $(".dropdown-menu li");
  Pages.each((index, page) => {
    const parseSubPage = cheerio.load(page);
    const parsedPage = parseSubPage("a.btn");
    const title = parsedPage.text();
    const url = parsedPage.attr("href");
    console.log({title, url});
  });
}
