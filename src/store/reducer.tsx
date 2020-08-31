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
			const newMovie = {
				id: state.length + 1,
				title: action.payload.title,
				director: action.payload.director,
				distributor: action.payload.distributor,
				imdb_rating: action.payload.imdb_rating,
				imdb_votes: action.payload.imdb_votes
			}

			return state.concat(newMovie)
		}
		case actionTypes.EDIT_MOVIE : {
			const index = state.findIndex(item => item.id === action.payload.id)

			state[index] = action.payload;

			return state;
		}
		case actionTypes.DELETE_MOVIE: {
			return state.filter(movie => movie.id !== action.id)
		}
		default: return state
	}
}

export default reducer;
