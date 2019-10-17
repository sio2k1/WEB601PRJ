// axios cfg file for accessing articles api
import axios from "axios";
export default axios.create({
  baseURL: "http://192.168.1.72:3001/api/articles",
  responseType: "json"
});