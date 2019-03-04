import {apiPages} from "../data/apiPages";
import cheerio from "cheerio";

export function parseSubPage(responseData: any): void {
  const $ = cheerio.load(responseData);
  const Pages = $(".dropdown-menu li");
  Pages.each((index, page) => {
    const parseSubPage = cheerio.load(page);
    const parsedPage = parseSubPage("a.btn");
    const title = parsedPage.text();
    const url = parsedPage.attr("href");
    apiPages.push({title, url});
  });
}
