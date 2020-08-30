import * as actionTypes from './actions';

export interface Filters {
	sort: string;
	page: number;
	filterEnabled: boolean;
	filterRating: number;
}

const initialState = {
	sort: '',
	page: 1,
	filterEnabled: false,
	filterRating: 8
}


const reducerFilters = (state = initialState, action: any) => {
	switch(action.type) {
		case actionTypes.SORT_MOVIES : {
			return {
				...state,
				sort: action.sortType
			}
		}
		case actionTypes.FILTER_MOVIES : {
			return {
				...state,
				filterEnabled: !state.filterEnabled
			}
		}
		default: return state
	}
}

export default reducerFilters;
