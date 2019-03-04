import {parseSubPage} from "../parsers";
import axios from "axios";
import {apiPages} from "../data";
import {getApi} from "./getApi";

export function getAllApi(): void {
  axios
    .get("http://api.winner7788u.com/doc/apiLearnPage_user.php")
    .then(function(response) {
      // handle success
      if (response.status === 200) {
        parseSubPage(response.data);
        apiPages.forEach((page, index) => {
          getApi(page.url);
        });
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
