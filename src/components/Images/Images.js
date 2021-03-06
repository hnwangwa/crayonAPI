//This component handles the click event - which powers the modal - for each image I call from the API.
import React, { Component } from "react";
import Modal from "../Modal";
import './Images.css';

//Of note - the 150x 150 thumbnailUrl could not be rendered by name, but instead returned under
//'url' in lieu of the 600x600 image. No idea why. #programming

class Images extends Component {
	constructor(props){
		super(props)
		this.state = {
			isOpen: false,
			caption: ""
		};
	}

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	handleChange = (event) => {
		this.setState({caption: event.target.value})

		}
	
	//This will persist captions for specific images
	saveCaption = () => {
		localStorage.setItem(this.props.id, this.state.caption);
		this.setState({caption: ""})
	}
	//This got rid of seeing "null" if localstorage is empty (first time using app) or emptied for any reason
	retrieveCaption = () => {	
		const captions = localStorage.getItem(this.props.id);
		if (captions !=null) {
			return <span> You've called this {captions}! Can you think of another name?</span>
		}
			return <span></span>;
	}

	render () {
		return (
			<div>
				<img onClick={ () => this.toggleModal() } src={ this.props.url } alt='error'></img>
					<Modal show={ this.state.isOpen} onClose={this.toggleModal}>
						<img src={this.props.bigurl} alt='oh no' style={{width:300,height:300}}>
							</img>
								<span>Technically, this color is called "<i>{this.props.title}</i>", but you could name it something more exciting. Any ideas?</span>
										<div className="field">
                        					<input type ="text" name="caption" onChange={this.handleChange.bind(this)} value={this.state.caption} placeholder="ex: Tickle Me Pink"/>
                       					 		<button type="submit" value="send" onClick={this.saveCaption}>Submit your idea!</button>
                       					 			<br></br><span>{this.state.caption}</span>
                       					 				<br></br><span>{this.retrieveCaption()}</span>
										</div>
					</Modal> 
			</div>
		);
	}
};


export default Images;