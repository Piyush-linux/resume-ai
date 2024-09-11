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
//-- TODO: Filter fields=title,resumeid
const FetchResume = (mail) => instance.get(`/resumes?filters[mail][$eq]=${mail}`);
const FetchSingleResume = (id) => instance.get(`/resumes/${id}?populate=*`);
const RemoveSingleResume = (id) => instance.delete(`/resumes?fields[0]=${id}`);
const UpdateSingleResume = (id, data) => instance.put(`/resumes/${id}`,data);


export default{ 
  CreateResume ,
  FetchResume ,
  FetchSingleResume ,
  RemoveSingleResume,
  UpdateSingleResume
};