/*
	External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
	Internal Dependencies
 */
import Shell from '../Shell/Shell';
import Title from '../../components/Title/Title';
import * as actionTypes from '../../store/actions';
import { Movie } from '../../store/reducer';

interface StateInterface {
	movieData: Movie[];
}

interface PropsInterface {
	items: Movie[];
}

class Table extends Component <PropsInterface, StateInterface> {
  render() {
  	  console.log(this.props.items)
	  
	  return (
	    <div className="Table" >
	    	<Shell>
	    		<div className="TableHeading">
	    			<Title title="Movies" />
	    		</div>
	    	</Shell>
	    </div>
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
		onAddItem: (name: string) => {
			dispatch({
				type: actionTypes.ADD_MOVIE,
				payload: {
					name
				}
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
