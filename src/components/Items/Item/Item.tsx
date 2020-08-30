import React, { FunctionComponent, Fragment, useState, MouseEvent } from 'react'

/*
	Defining Prop Types
 */
type ItemProps = {
  title: string|number,
  director?: string,
  distributor?: string,
  rating?: number,
  votes?: number,
  deleted: (event: MouseEvent<HTMLButtonElement>) => void
}

const Item: FunctionComponent<ItemProps> = ({title, director, distributor, rating, votes, deleted, children}) => {

	let names = "Item";
	const [isActive, setActive] = useState<boolean>(false);

	/**
	 * Set Active(Delete) State To Item
	 * @return {boolean} [true/false]
	 */
	const toggleActivation = () => {
		return setActive(!isActive);
	};

	/*
		If active add class Active to the element
	 */
	if (isActive) {
		names = ["Item", "Active"].join(' ');
	}

	return (
		<Fragment>
			<div className={names} onClick={toggleActivation}>
				<p>{title}</p>
				<p>{director}</p>
				<p>{distributor}</p>
				<p>{rating}</p>
				<p>{votes}</p>

				<button onClick={deleted} className="DeleteButton">
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
				</button>
			</div>
		</Fragment>
	)
}

export default Item;
