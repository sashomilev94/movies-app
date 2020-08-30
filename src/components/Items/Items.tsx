/*
	External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

/*
	Internal Dependencies
 */
import { Movie } from '../../store/reducer';
import Item from './Item/Item';
import * as actionTypes from '../../store/actions';

/*
	Defining State Interface
 */
interface StateInterface {
	movieData: Movie[];
	filters: {
		sort: string,
		page: number,
		filterEnabled: boolean,
		filterRating: number
	};
}

/*
	Defining Props Interface
 */
interface PropsInterface {
	items: Movie[];
	onDeleteItem: Function;
	sortedBy: string;
	filterEnabled: boolean;
	filterRating: number;
}

class Items extends Component <PropsInterface, StateInterface> {
  render() {
  	  const { items, onDeleteItem, sortedBy, filterEnabled, filterRating } = this.props;
  	  
  	  let computedItems;
  	  
  	  // to be refactored
  	  if (sortedBy === '') {
  	  	computedItems = items;
  	  } else if(sortedBy === 'asc') {
  	  	computedItems = items.concat().sort((a:Movie, b:Movie) => {
  	  		return a.imdb_rating - b.imdb_rating;
  	  	});
  	  } else {
  	  	computedItems = items.concat().sort((a:Movie, b:Movie) => {
  	  		return b.imdb_rating - a.imdb_rating;
  	  	});
  	  }

  	  if (filterEnabled) {
  	  	computedItems = computedItems.filter((item:Movie) => {
  	  		return item.imdb_rating > filterRating;
  	  	});
  	  }

	  return (
	    <Fragment>
	    	<div className="ListHolder">
	    		{	
	    			/**
	    			 * Map over array items and return single array object
	    			 */
	    			computedItems.map(item => (
	    			<Item 
	    				key={item.id} 
	    				title={item.title} 
	    				director={item.director} 
	    				distributor={item.distributor} 
	    				rating={item.imdb_rating} 
	    				votes={item.imdb_votes}
	    				deleted={() => onDeleteItem(item.id)} />
	    			))
	    		}
	    	</div>
	    </Fragment>
	  );
  }
}

const mapStateToProps = (state: StateInterface) => {
	return {
		items: state.movieData,
		sortedBy: state.filters.sort,
		filterEnabled: state.filters.filterEnabled,
		filterRating: state.filters.filterRating
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onDeleteItem: (id: number) => {
			dispatch({
				type: actionTypes.DELETE_MOVIE,
				id
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
