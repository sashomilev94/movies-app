import React, { FunctionComponent, Fragment } from 'react'

/*
	Defining Prop Types
 */
type ItemProps = {
  title: string|number,
  director?: string,
  distributor?: string,
  rating?: number,
  votes?: number
}

const Item: FunctionComponent<ItemProps> = ({title, director, distributor, rating, votes, children}) => {
	
	return (
		<Fragment>
			<div className="Item">
				<p>{title}</p>
				<p>{director}</p>
				<p>{distributor}</p>
				<p>{rating}</p>
				<p>{votes}</p>
			</div>
		</Fragment>
	)
}

export default Item;
