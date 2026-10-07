import axios from "axios";

 const api = axios.create({
  baseURL: "https://django-watchstore-1.onrender.com/api/",
  // baseURL: "http://127.0.0.1:8000/api/",
            
});


export default api;