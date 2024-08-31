import axios from "axios";

const STRAPI_API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const instance = axios.create({
    baseURL: import.meta.env.VITE_URL+"/api/",
    headers: {
      'Content-Type': "application/json",
      'Authorization': `Bearer ${STRAPI_API_KEY}`
        
    },
  });

const CreateResume = (data) => instance.post('/resumes',data);
const FetchResume = (mail) => instance.get('/resumes?filters[user_email][$eq]='+mail);

export default{ 
  CreateResume ,
  FetchResume
};