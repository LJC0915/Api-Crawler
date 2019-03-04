import cheerio from "cheerio";

export function parseApi(responseData: any): void {
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
  });
}
