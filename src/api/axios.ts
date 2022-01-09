import axios, { AxiosResponse } from "axios";
import jsSHA from "jssha";

axios.defaults.baseURL = process.env.REACT_APP_PTX_BASE_URL;

const getGMTString = (): string => new Date().toUTCString();

const getAuthorization = (): string => {
  let ShaObj: jsSHA = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(process.env.REACT_APP_PTX_APP_KEY || "", "TEXT");
  ShaObj.update("x-date: " + getGMTString());
  let HMAC: string = ShaObj.getHMAC("B64");
  return `hmac username="${process.env.REACT_APP_PTX_APP_ID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
};

const request = (
  method: string,
  url: string,
  data?: any,
  config?: object
): Promise<AxiosResponse<unknown, any>> | boolean => {
  method = method.toLowerCase();
  axios.defaults.headers.common["Authorization"] = getAuthorization();
  axios.defaults.headers.common["X-Date"] = getGMTString();
  axios.defaults.timeout = 2500;
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
      console.log(`unknown method: ${method}`);
      return false;
  }
};

export default request;
export type { AxiosResponse };