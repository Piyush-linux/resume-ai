import axios from "axios";

const STRAPI_API_KEY = import.meta.env.STRAPI_API_KEY;

const instance = axios.create({
    baseURL: 'http://127.0.0.1:1337/api/',
    headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${STRAPI_API_KEY}`,
    },
    // .. other options
  });


let fetcher = (data) => instance.post('/resumes',data);

export default fetcher;