import * as actionTypes from './actions';

export interface Filters {
	sort: string;
	page: number;
	itemsPerPage: number;
	filterEnabled: boolean;
	filterRating: number;
}

const initialState = {
	sort: '',
	page: 1,
	itemsPerPage: 10,
	filterEnabled: false,
	filterRating: 8
}


const reducerFilters = (state = initialState, action: any) => {
	switch(action.type) {
		case actionTypes.SORT_MOVIES : {
			return {
				...state,
				sort: action.sortType,
				page: 1
			}
		}
		case actionTypes.CHANGE_PAGE : {
			return {
				...state,
				page: action.page
			}
		}
		case actionTypes.FILTER_MOVIES : {
			return {
				...state,
				filterEnabled: !state.filterEnabled,
				page: 1
			}
		}
		default: return state
	}
}

export default reducerFilters;
