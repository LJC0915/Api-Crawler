import {parseApi} from "../parsers";
import axios from "axios";

export function getApi(pageName: string) {
  const Domain = "http://api.winner7788u.com/doc/";
  const Url = Domain + pageName;
  axios
    .get(Url)
    .then(function(response) {
      // handle success
      if (response.status === 200) {
        parseApi(response.data, pageName, Domain);
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
