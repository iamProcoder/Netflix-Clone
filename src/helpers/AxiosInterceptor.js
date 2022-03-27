import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL; // write your api
const axiosCreator = axios.create({
    baseURL: apiUrl,
});

export default axiosCreator;