// axios cfg file for accessing price list api
import axios from "axios";
export default axios.create({
  baseURL: "http://192.168.1.72:3001/api/pricelist",
  responseType: "json"
});
//baseURL: "http://localhost:3001/api/pricelist",

//192.168.1.72