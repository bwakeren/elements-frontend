import axios from "axios";

const instances = axios.create({
  baseURL: "https://api.elements.buildwithangga.com",
});

export default instances;
