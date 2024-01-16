import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        'X-RapidAPI-Key': 'ba97e7c2d8msh0f354239a0d92dfp19dba7jsneb086ee9a676',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};