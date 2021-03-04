import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos";

export const fetchData = () => axios.get(url);