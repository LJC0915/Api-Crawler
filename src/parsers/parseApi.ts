import cheerio from "cheerio";
import {Api} from "../types";
import {addApisToPage} from "../data/apiPages";

export function parseApi(responseData: any, pageName: string): void {
  const $ = cheerio.load(responseData);
  const Apis = $("table.table tr td");
  let apis: Api[] = [];
  Apis.each((index, api) => {
    const parseApi = cheerio.load(api);
    const desc = parseApi("div div b").text();
    const url = parseApi("div div")
      .first()
      .contents()
      .last()
      .text()
      .trim();
    apis.push({desc, url});
  });
  addApisToPage(pageName, apis);
}
