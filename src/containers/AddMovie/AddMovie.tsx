/*
	External Dependencies
 */
import React, { Component, SyntheticEvent, ChangeEvent, Fragment } from 'react'
import { connect } from 'react-redux';

/*
	Internal Dependencies
 */
import Shell from '../Shell/Shell';
import * as actionTypes from '../../store/actions';

/*
	Defining State Interface
 */
interface StateInterface {
	title: string|number;
	director: string,
	distributor: string,
	imdb_rating: number,
	imdb_votes: number
}

/*
	Defining Props Interface
 */
interface PropsInterface {
	onAddItems: Function;
	history: any;
}

class AddMovie extends Component <PropsInterface, StateInterface> {
	state = {
		title: '',
		director: '',
		distributor: '',
		imdb_rating: 0,
		imdb_votes: 0
	}

	onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {		
		this.setState({
			[event.target.name]: event.target.value
		} as any )
	}

	onFormSubmitHandler = (event: SyntheticEvent) => {
		event.preventDefault();

		this.props.onAddItems(this.state.title,this.state.director,this.state.distributor,this.state.imdb_rating,this.state.imdb_votes);

		/*
			Redirect to movies page
		 */
		this.props.history.push('/movies');
	}

	render() {
		return (
			<Fragment>
				<div className="NewMovieForm">
					<Shell>
						<h1>Add movie</h1>
						
						<div>
							<form onSubmit={this.onFormSubmitHandler}>
								<input placeholder="name" type="text" name="title" required pattern="^[0-9a-zA-Z]+$" onChange={this.onChangeHandler} />

								<input placeholder="director" type="text" name="director" pattern="[a-zA-Z]*" onChange={this.onChangeHandler} />

								<input placeholder="distributor" type="text" name="distributor" pattern="[a-zA-Z]*" onChange={this.onChangeHandler} />

								<input placeholder="text" pattern="\d+((\.)\d+)?" type="text" name="imdb_rating" onChange={this.onChangeHandler} />

								<input placeholder="votes" pattern="[0-9]*" type="text" name="imdb_votes" onChange={this.onChangeHandler} />

								<button>Add movie</button>
							</form>				
						</div>
					</Shell>
				</div>
			</Fragment>
		)
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onAddItems: (title:string|number, director:string,distributor:string,imdb_rating:number,imdb_votes:number) => {
			dispatch({
				type: actionTypes.ADD_MOVIE,
				payload: {
					title,
					director,
					distributor,
					imdb_rating,
					imdb_votes
				}
			})
		}
	}
}

export default connect(null, mapDispatchToProps)(AddMovie);
