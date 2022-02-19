import axios from "axios";
import jsSHA from "jssha";

axios.defaults.baseURL = process.env.REACT_APP_PTX_BASE_URL;

const getGMTString = (): string => new Date().toUTCString();

const getAuthorization = (): string => {
  const ShaObj: jsSHA = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(process.env.REACT_APP_PTX_APP_KEY || "", "TEXT");
  ShaObj.update("x-date: " + getGMTString());
  const HMAC: string = ShaObj.getHMAC("B64");
  return `hmac username="${process.env.REACT_APP_PTX_APP_ID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
};

axios.defaults.headers.common["Authorization"] = getAuthorization();
axios.defaults.headers.common["X-Date"] = getGMTString();
axios.defaults.timeout = 2500;

export default axios;
