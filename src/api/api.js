import axios from "axios";
import Info from "../constants/Info";
import Products from "../constants/Products";

var urlAPi = "";

if (Products.api.dev) {
  urlAPi = Info.urlDev;
} else if (Products.api.qa) {
  urlAPi = Info.urlQA;
} else if (Products.api.deploy) {
  urlAPi = Info.urlDeploy;
}

const api = axios.create({
  baseURL: urlAPi,
});

export default api;
