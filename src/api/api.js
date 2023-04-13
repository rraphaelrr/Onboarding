import axios from "axios";
import Info from "../constants/Info";
import Products from "../constants/Products";

var urlAPi = "";

if (Products.api.homolog) {
    urlAPi = Info.urlHomolog
} else if (Products.api.production) {
    urlAPi = Info.urlProduct;
}

const api = axios.create({
  baseURL: urlAPi
});

export default api;