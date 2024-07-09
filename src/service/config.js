import axios from "axios";
import {getAccessToken} from "../utils"
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgNDMiLCJIZXRIYW5TdHJpbmciOiIxNS8wMS8yMDI1IiwiSGV0SGFuVGltZSI6IjE3MzY4OTkyMDAwMDAiLCJuYmYiOjE3MTk0MjEyMDAsImV4cCI6MTczNzA0NjgwMH0._1nNTer6EQJycfH9UBD3WvpKecB92OKCg9GEyX6eSSc";
export let https = axios.create({
  baseURL: "https://jiranew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    Authorization: 'Bearer ' + getAccessToken(),
  },
  
});





