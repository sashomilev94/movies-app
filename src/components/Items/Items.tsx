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
}

/*
	Defining Props Interface
 */
interface PropsInterface {
	items: Movie[];
}

class Items extends Component <PropsInterface, StateInterface> {
  render() {
  	  const { items } = this.props;

	  return (
	    <Fragment>
	    	<div className="ListHolder">
	    		{	
	    			/**
	    			 * Map over array items and return single array object
	    			 */
	    			items.map(item => (
	    			<Item 
	    				key={item.id} 
	    				title={item.title} 
	    				director={item.director} 
	    				distributor={item.distributor} 
	    				rating={item.imdb_rating} 
	    				votes={item.imdb_votes} />
	    			))
	    		}
	    	</div>
	    </Fragment>
	  );
  }
}


const mapStateToProps = (state: StateInterface) => {
	return {
		items: state.movieData
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onAddItem: (id: number) => {
			dispatch({
				type: actionTypes.DELETE_MOVIE,
				id
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
