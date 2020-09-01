/*
	External Dependencies
 */
import React, { FunctionComponent, MouseEvent } from 'react'
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

type ItemProps = {
	postsPerPage: number,
	totalPosts: number,
	onChangePage: Function,
	currentPage: number
}

interface StateInterface {
	filters: {
		page: number
	};
}


const Pagination:FunctionComponent<ItemProps> = ({postsPerPage, totalPosts, onChangePage, currentPage}) => {
	
	const changePageHandler = (page: number) => {
		onChangePage(page);
	}

	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts /  postsPerPage) ; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="Pagination">
				{pageNumbers.map(page => (
					<li key={page} className="PageItem">
						<button className={currentPage === page ? 'active' : ''} onClick={() => changePageHandler(page)}>{page}</button>
					</li>

				))}
			</ul>
		</nav>
	)
}

const mapStateToProps = (state: StateInterface) => {
	return {
		currentPage: state.filters.page
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		onChangePage: (page: number) => {
			dispatch({
				type: actionTypes.CHANGE_PAGE,
				page
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
