import axios from "axios";

export const baseURL = "https://week12-api-1cc7.onrender.com/api/";

export const getData = async() =>  {
    const response = await axios.get(`${baseURL}/questions`);
    return response.data;
}