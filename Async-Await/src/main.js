import { fetchDataUsersAsync, getUser, ej1Promise } from './helpers/scripts.js';
//getUser();

onsole.log(await fetchDataUsersAsync());

const urlUsers = import.meta.env.VITE_API_STARWARS;
const urlImg = import.meta.env.VITE_API_SWABI;

