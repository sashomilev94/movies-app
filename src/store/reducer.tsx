import * as actionTypes from './actions';
import movieData from '../data/movies.json';

export interface Movie {
	id: number;
	title: string;
	director: string;
	distributor: string;
	rating: number;
	votes: number;
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
			return {
				...state,
			}
		}
		default: return state
	}
}

export default reducer;
