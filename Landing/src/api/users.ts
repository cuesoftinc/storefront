import axios from "axios";

export const fetchData = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};
