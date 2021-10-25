import axios from "axios";
import jsSHA from "jssha";

let GMTString = new Date().toGMTString();
console.log("GMTString", GMTString);
let ShaObj = new jsSHA("SHA-1", "TEXT");
console.log("ShaObj", ShaObj);
console.log("process.env.APP_KEY", process.env.REACT_APP_PTX_APP_KEY);

ShaObj.setHMACKey(process.env.REACT_APP_PTX_APP_KEY, "TEXT");
ShaObj.update("x-date: " + GMTString);
let HMAC = ShaObj.getHMAC("B64");
let Authorization = `hmac username="${process.env.REACT_APP_PTX_APP_ID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;

const instance = axios.create({
  baseURL: process.env.REACT_APP_PTX_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    Authorization: Authorization,
    "X-Date": new Date().toGMTString(),
  },
});

export default instance;
