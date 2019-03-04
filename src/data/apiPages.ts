import {Api, ApiPage} from "../types/ApiPage";
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
  apiPages.forEach((page, index) => {
    page.apis.forEach((api, i) => {
      if (api.url.includes(apiName) && api.url.length === apiName.length) {
        console.log({"page name": page.title, "page url": page.url, api});
      }
    });
  });
}
