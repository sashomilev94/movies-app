import * as actionTypes from './actions';
import movieData from '../data/movies.json';

export interface Movie {
	id: number;
	title: string|number;
	director: string;
	distributor: string;
	imdb_rating: number;
	imdb_votes: number;
}

const initialState: Movie[] = movieData;


const reducer = (state = initialState, action: any) => {
	switch(action.type) {
		case actionTypes.ADD_MOVIE : {
			return {
				...state,
			}
		}
		case actionTypes.EDIT_MOVIE : {
			return {
				...state,
			}
		}
		case actionTypes.DELETE_MOVIE: {
			return state.filter(movie => movie.id !== action.id)
		}
		default: return state
	}
}

export default reducer;
