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
