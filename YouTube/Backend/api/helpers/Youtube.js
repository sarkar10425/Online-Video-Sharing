const { default: Axios } = require("axios");
const axios = require('axios');

class Youtube {
    get = (q) => {
        const url = `https://youtube-search1.p.rapidapi.com/${q}`;
        return axios.get(url, {
            headers: {
                "x-rapidapi-host":"youtube-search1.p.rapidapi.com",
                "x-rapidapi-key": process.env.YOUTUBE_API_KEY,
            }
        })
    }
}

module.exports = Youtube;