/*
	External Dependencies
 */
import React, { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

/*
	Internal Dependencies
 */
import Shell from '../Shell/Shell';
import Title from '../../components/Title/Title';
import Items from '../../components/Items/Items';
import * as actionTypes from '../../store/actions';
import { Movie } from '../../store/reducer';

/*
	Defining State Interface
 */
interface StateInterface {
	movieData: Movie[];
	filters: {
		sort: string,
		page: number,
		filterRating: number
	};
}

/*
	Defining Props Interface
 */
interface PropsInterface {
	items: Movie[];
	onSortItem: Function;
	onFilterItems: Function;
	sortedBy: string;
	filterRating: number;
}

class Table extends Component <PropsInterface, StateInterface> {
  /*
  	  Change Sort Type when sort button click is fired
   */
  sortButtonClickHandler = (event:MouseEvent) => {
  	let sortBy:string;

  	if (this.props.sortedBy === '' || this.props.sortedBy === 'desc') {
  		sortBy = 'asc'
  	} else {
  		sortBy = 'desc'
  	}

  	this.props.onSortItem(sortBy);
  }

  /*
  	  Fire Filter function when sort button click is fired
   */
  filterButtonClickHandler = (event:MouseEvent) => {
  	this.props.onFilterItems();
  }

  render() {
  	  const { filterRating } = this.props;

	  return (
	    <div className="Table" >
	    	<Shell>
	    		<div className="TableHeading">
	    			<Title title="Movies" />
	    		</div>

    			<button onClick={this.sortButtonClickHandler}>Sort by rating</button>

    			<button onClick={this.filterButtonClickHandler}>Show rating over {filterRating}</button>

    			<NavLink 
    				to="/add-movie">Add Movie</NavLink>
	    		
	    		<div className="TableBody">	
	    			<div className="TableTitles">
	    				<ul>
	    					<li>Movie Name</li>
	    					<li>Director</li>
	    					<li>Distributor</li>
	    					<li>Rating</li>
	    					<li>Votes</li>
	    				</ul>
	    			</div>
	    			
	    			<Items />
	    		</div>
	    	</Shell>
	    </div>
	  );
  }
}


const mapStateToProps = (state: StateInterface) => {
	return {
		items: state.movieData,
		sortedBy: state.filters.sort,
		filterRating: state.filters.filterRating
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onSortItem: (sortType:string) => {
			dispatch({
				type: actionTypes.SORT_MOVIES,
				sortType
			})
		},
		onFilterItems: () => {
			dispatch({
				type: actionTypes.FILTER_MOVIES
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
