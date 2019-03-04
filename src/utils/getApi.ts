import {parseApi} from "../parsers";
import axios from "axios";

export function getApi(pageName: string) {
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
