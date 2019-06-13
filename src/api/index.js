import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon/"

export const list_pokemon = () => {
    return axios.get(URL)
};