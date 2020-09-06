import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  return axios.get(baseUrl);
};
const create = (newObj) => {
  axios.post(baseUrl, newObj);
};
const update = ({ id, newObj }) => {
  axios.put(`${baseUrl}/${id}`, newObj);
};
