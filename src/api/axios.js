import axios from "axios";
import jsSHA from "jssha";

axios.defaults.baseURL = process.env.REACT_APP_PTX_BASE_URL;
//axios.defaults.headers["Accept-Encoding"] = "gzip";

const getGMTString = () => new Date().toGMTString();
const getAuthorization = () => {
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(process.env.REACT_APP_PTX_APP_KEY, "TEXT");
  ShaObj.update("x-date: " + getGMTString());
  let HMAC = ShaObj.getHMAC("B64");
  return `hmac username="${process.env.REACT_APP_PTX_APP_ID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
};

const request = (method, url, data = null, config) => {
  method = method.toLowerCase();
  axios.defaults.headers["Authorization"] = getAuthorization();
  axios.defaults.headers["X-Date"] = getGMTString();
  switch (method) {
    case "post":
      return axios.post(url, data, config);
    case "get":
      return axios.get(url, { params: data });
    case "delete":
      return axios.delete(url, { params: data });
    case "put":
      return axios.put(url, data);
    case "patch":
      return axios.patch(url, data);
    default:
      console.log(`未知的 method: ${method}`);
      return false;
  }
};

export default request;