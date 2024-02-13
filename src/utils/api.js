import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        'X-RapidAPI-Key': 'cab52cf7ddmshcffaa921ffa3a38p1daa00jsn740e7dfc5103',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
//cab52cf7ddmshcffaa921ffa3a38p1daa00jsn740e7dfc5103