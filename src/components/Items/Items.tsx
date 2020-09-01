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
import Pagination from '../Pagination/Pagination';
import * as actionTypes from '../../store/actions';

/*
	Defining State Interface
 */
interface StateInterface {
	movieData: Movie[];
	filters: {
		sort: string,
		filterEnabled: boolean,
		filterRating: number,
		page: number,
		itemsPerPage: number
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
	page: number;
	visibleItems: number;
}

class Items extends Component <PropsInterface, StateInterface> {
  render() {
  	  const { items, onDeleteItem, sortedBy, filterEnabled, filterRating, page, visibleItems } = this.props;
  	  const indexOfLastPosts = page * visibleItems;
  	  const indexOfFirstPost = indexOfLastPosts - visibleItems;

	  let computedItems = items;

  	  /**
  	   * Check sort type
  	   * @param  {rating number} sortedBy [rating]
  	   * @return {rating number}          [Asc/Desc]
  	   */
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

  	  /**
  	   * Check filter enabled
  	   * @param  {item} filterEnabled [sort by rating]
  	   * @return {rating over FilterRating} [FilterRating comes from reducer-filters]
  	   */
  	  if (filterEnabled) {
  	  	computedItems = computedItems.filter((item:Movie) => {
  	  		return item.imdb_rating > filterRating;
  	  	});
  	  }

  	  /* Checking computed items length before initializing the pagination */
  	  const allComputedItems = computedItems.length;

  	  /* Showing number of items per page */
  	  computedItems = computedItems.slice(indexOfFirstPost, indexOfLastPosts);

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
	    				dataID={item.id}
	    				deleted={() => onDeleteItem(item.id)} />
	    			))
	    		}
	    	</div>

	    	<Pagination postsPerPage={visibleItems} totalPosts={allComputedItems} />
	    </Fragment>
	  );
  }
}

const mapStateToProps = (state: StateInterface) => {
	return {
		items: state.movieData,
		sortedBy: state.filters.sort,
		page: state.filters.page,
		visibleItems: state.filters.itemsPerPage,
		filterEnabled: state.filters.filterEnabled,
		filterRating: state.filters.filterRating
	}
}

const mapDispatchToProps = (dispatch: Function) => {
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
