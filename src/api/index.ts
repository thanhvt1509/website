import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api",
  // headers: {
  //   // "Content-Type": "application/json",
  //   // Authorization: "Bearer token",
  // },
});

export default instance;
