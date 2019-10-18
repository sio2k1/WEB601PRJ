// axios cfg file for accessing articles api
import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3001/api/articles",
  responseType: "json"
});