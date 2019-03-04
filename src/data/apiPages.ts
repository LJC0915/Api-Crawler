import {Api, ApiData, ApiPage} from "../types";
export let apiPages: ApiPage[] = [];

export function clearApiPages(): void {
  while (apiPages.length) {
    apiPages.pop();
  }
}

export function addApisToPage(pageName: string, apis: Api[]): void {
  const pageIndex = apiPages.findIndex((page) => {
    return page.url === pageName;
  });
  if (pageIndex !== -1) {
    apiPages[pageIndex].apis = Array.of<Api>(...apis);
  }
}

export function getApiData(apiName: string): any {
  let data: ApiData = null;
  const Domain = "http://api.winner7788u.com/doc/";
  apiPages.forEach((page, index) => {
    page.apis.forEach((api, i) => {
      if (api.url.includes(apiName) && api.url.length === apiName.length) {
        data = {pageName: page.title, pageUrl: Domain + page.url, api};
      }
    });
  });
  return data;
}
