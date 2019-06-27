import axios from "axios";

const URL = "https://pokeapi.co/api/v2"

export const list_pokemon = () => {
    return axios.get(`${URL}/pokemon/`);
};