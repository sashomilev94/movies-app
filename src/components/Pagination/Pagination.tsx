import React, { FunctionComponent } from 'react'

const Pagination:FunctionComponent<{postsPerPage: number, totalPosts: number}> = ({postsPerPage, totalPosts}) => {
	
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts /  postsPerPage) ; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="Pagination">
				{pageNumbers.map(page => (
					<li key={page} className="PageItem">
						<a href="#" className="PageLink">{page}</a>
					</li>

				))}
			</ul>
		</nav>
	)
}

export default Pagination;
