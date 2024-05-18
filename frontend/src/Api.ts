import axios from "axios";

// Create an instance of axios with custom configuration
const API = axios.create({
  baseURL: `http://127.0.0.1:5001`,
});

export default API;
