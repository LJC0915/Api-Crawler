import {ApiPage} from "../types/ApiPage";
export let apiPages: ApiPage[] = [];

export function clearApiPages(): void {
  while (apiPages.length) {
    apiPages.pop();
  }
}
