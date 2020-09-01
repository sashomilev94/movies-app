/*
	External Dependencies
 */
import React, { Component, Fragment, ChangeEvent, SyntheticEvent } from 'react'
import { connect } from 'react-redux';

/*
	Interal Dependencies
 */
import Title from '../../components/Title/Title';
import Shell from '../Shell/Shell';
import { Movie } from '../../store/reducer';
import * as actionTypes from '../../store/actions';

/*
	Defining State Interface
 */
interface StateInterface {
	id: number;
	title: string|number;
	director: string;
	distributor: string;
	imdb_rating: number;
	imdb_votes: number;
}

interface StoreInterface {
	movieData: Movie[];
}

/*
	Defining Props Interface
 */
interface PropsInterface {
	id: number;
	title: string|number;
	director: string;
	distributor: string;
	imdb_rating: number;
	imdb_votes: number;
	ownProps: any;
	item: any;
	history: any;
	onEditItems: Function;
}

class EditMovie extends Component <PropsInterface, StateInterface> {
	state = {
		id: this.props.item.id,
		title: '',
		director:'',
		distributor: '',
		imdb_rating: 0,
		imdb_votes: 0
	}

	componentDidMount() {
		this.setState({
			title: this.props.item.title,
			director: this.props.item.director,
			distributor: this.props.item.distributor,
			imdb_rating: this.props.item.imdb_rating,
			imdb_votes: this.props.item.imdb_votes,
		} as any)
	}

	onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {		
		this.setState({
			[event.target.name]: event.target.value
		} as any )
	}

	onFormSubmitHandler = (event: SyntheticEvent) => {
		event.preventDefault();

		this.props.onEditItems(this.state.id,this.state.title,this.state.director,this.state.distributor,this.state.imdb_rating,this.state.imdb_votes);

		/*
			Redirect to movies page
		 */
		this.props.history.push('/movies');
	}

	render() {
		const { title, director, distributor, imdb_rating, imdb_votes } = this.state;

		return (
			<Fragment>
				<div className="NewMovieForm">
					<Shell>
						<div className="NewMovieFormInner">
							<Title title="Edit Movie" />
							
							<div>
								<form className="Form" onSubmit={this.onFormSubmitHandler}>
									<div className="FormControls">
										<input onChange={this.onChangeHandler} placeholder="Film Title" type="text" name="title" required value={title} />
										
									</div>

									<div className="FormControls">
										<input onChange={this.onChangeHandler} placeholder="Director" type="text" name="director" required value={director} />
										
									</div>

									<div className="FormControls">
										<input onChange={this.onChangeHandler} placeholder="Distributor" value={distributor} required type="text" name="distributor" />
										
									</div>

									<div className="FormControls">
										<input onChange={this.onChangeHandler} placeholder="Rating" required pattern="\d+((\.)\d+)?" type="text" name="imdb_rating" value={imdb_rating} />
										
									</div>

									<div className="FormControls">
										<input onChange={this.onChangeHandler} placeholder="Votes" required pattern="[0-9]*" type="text" value={imdb_votes} name="imdb_votes" />
									</div>

									<div className="FormActions">
										<button className="Btn">Edit movie</button>
									</div>
								</form>				
							</div>
						</div>
					</Shell>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = (state: StoreInterface, ownProps: any) => {
	return {
		item: state.movieData.find(item => item.id === +ownProps.match.params.id)
	}
}

const mapDispatchToProps = (dispatch: Function) => {
	return {
		onEditItems: (id: number, title:string|number, director:string,distributor:string, imdb_rating:number, imdb_votes:number) => {
			dispatch({
				type: actionTypes.EDIT_MOVIE,
				payload: {
					id,
					title,
					director,
					distributor,
					imdb_rating,
					imdb_votes
				}
			})
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);
