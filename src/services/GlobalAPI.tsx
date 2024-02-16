import axios from "axios";

const key = "23c0b0a37e5242ea9b3e5e9df373e504";

const instance = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = instance.get(`/genres?key=${key}`);
const getAllGames = instance.get(`/games?key=${key}`);
const getGameListByGenre = (id:number) => instance.get(`/games?key=${key}&genres=${id}`)

export default {
    getGenreList,
  getAllGames,
    getGameListByGenre
}