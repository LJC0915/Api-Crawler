import {parseSubPage} from "../parsers";
import axios from "axios";

export function getAllApiPages(): void {
  axios
    .get("http://api.winner7788u.com/doc/apiLearnPage_user.php")
    .then(function(response) {
      // handle success
      if (response.status === 200) {
        parseSubPage(response.data);
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
