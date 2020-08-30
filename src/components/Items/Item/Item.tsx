import React, { FunctionComponent, Fragment, useState, MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';

/*
	Defining Prop Types
 */
type ItemProps = {
  title: string|number,
  director: string,
  distributor: string,
  rating: number,
  votes: number,
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

	const enterEditState = () => {

	}

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

				<NavLink 
					to="/edit-movie" 
					className="EditButton">
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 494.936 494.936">
					  <path d="M389.844 182.85c-6.743 0-12.21 5.467-12.21 12.21v222.968c0 23.562-19.174 42.735-42.736 42.735H67.157c-23.562 0-42.736-19.174-42.736-42.735V150.285c0-23.562 19.174-42.735 42.736-42.735h267.741c6.743 0 12.21-5.467 12.21-12.21s-5.467-12.21-12.21-12.21H67.157C30.126 83.13 0 113.255 0 150.285v267.743c0 37.029 30.126 67.155 67.157 67.155h267.741c37.03 0 67.156-30.126 67.156-67.155V195.061c0-6.743-5.467-12.211-12.21-12.211z"/>
					  <path d="M483.876 20.791c-14.72-14.72-38.669-14.714-53.377 0L221.352 229.944c-.28.28-3.434 3.559-4.251 5.396l-28.963 65.069a12.203 12.203 0 002.521 13.6 12.214 12.214 0 008.639 3.576c1.675 0 3.362-.346 4.96-1.057l65.07-28.963c1.83-.815 5.114-3.97 5.396-4.25L483.876 74.169c7.131-7.131 11.06-16.61 11.06-26.692 0-10.081-3.929-19.562-11.06-26.686zM466.61 56.897L257.457 266.05c-.035.036-.055.078-.089.107l-33.989 15.131L238.51 247.3c.03-.036.071-.055.107-.09L447.765 38.058c5.038-5.039 13.819-5.033 18.846.005a13.205 13.205 0 013.905 9.414c0 3.559-1.389 6.903-3.906 9.42z"/>
					</svg>
				</NavLink>

				<button onClick={deleted} className="DeleteButton">
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
				</button>
			</div>
		</Fragment>
	)
}

export default Item;
