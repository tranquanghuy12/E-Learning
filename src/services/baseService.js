import Axios from "axios";
import {DOMAIN,TOKEN_CYBERSOFT,ACCESSTOKEN} from '../util/setting/config'

export class baseService {
  //put JSON về phía backend

  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        ["TokenCybersoft"]: TOKEN_CYBERSOFT,
        ["Authorization"]: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
  };
  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: {
        ["TokenCybersoft"]: TOKEN_CYBERSOFT,
        ["Authorization"]: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
  };
  get = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        ["TokenCybersoft"]: TOKEN_CYBERSOFT,
        ["Authorization"]: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
  };
  delete = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        ["TokenCybersoft"]: TOKEN_CYBERSOFT,
        ["Authorization"]: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
  };
}
