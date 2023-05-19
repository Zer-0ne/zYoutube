import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    // method: 'GET',
    url: BASE_URL,
    params: {
        maxResults: '50',
        regionCode: 'IN',
        order: 'date'
    },
    headers: {
        'X-RapidAPI-Key': '701987354dmsh60305238fb50193p11db4djsn1d18fba364e9',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
};
export const FetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}