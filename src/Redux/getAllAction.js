import { GET_ALL } from './getAll';
import axios from 'axios';

export const getAll = movies => {
    return {
        type: GET_ALL,
        payload: movies
    }
}

// export const fetchMovies = () => {
//     return async function(dispatch){
//         await axios.get('https://api.disneyapi.dev/characters')
//             .then(response => {
//                 dispatch(getAll(response));
//             })
//             .catch(error => {
//                 throw(error);
//             })
//     }
// }