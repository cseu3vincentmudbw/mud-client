import axios from "axios";

// checks if a token exists already in localstorage and creates an enriched instance of the header
export default function() {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";

  const instance = axios.create({
    headers: {
      Authorization: token
    }
  });

  return instance;
}
