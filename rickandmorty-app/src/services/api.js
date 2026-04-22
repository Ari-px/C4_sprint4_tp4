import axios from "axios";

const API = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

// 🔍 búsqueda por nombre
export const getCharactersByName = async (name) => {
  const res = await API.get(`/character/?name=${name}`);
  return res.data.results;
};

// 🌐 traer personajes iniciales (todos los de la primera página)
export const getAllCharacters = async () => {
  const res = await API.get("/character");
  return res.data.results;
};