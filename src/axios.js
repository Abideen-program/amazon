import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-ba666/us-central1/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
