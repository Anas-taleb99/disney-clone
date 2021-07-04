import { GET_ALL } from '../getAll';
import movies from '../../desneyMovies.json';

const initialState = movies;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
            return {
                movies: action.payload,
                loading: false
            }
        default:
            return initialState
    }
}

export default reducer;