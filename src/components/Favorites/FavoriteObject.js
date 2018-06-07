import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FAVORITE_ACTIONS } from '../../redux/actions/favoriteActions';

const mapStateToProps = state => ({
    user: state.user,
});

class FavoriteObject extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            edit: false,
            comment: this.props.favorite.comment,
        };

        this.playAudio = () => {this.sound.play};
    }

    handleEditClick = () => {
        this.setState({
            edit: true,
        })
    }

    handleChangeFor = (property) => (event) => {
        this.setState({
            [property]: event.target.value
        })
    }

    handleDelete = (id) => {
        const action = {
            type: FAVORITE_ACTIONS.DELETE,
            payload: id,
        }
        this.props.dispatch(action);
    }

    handleSave = (id) => {
        
    }

    handleCancel = () => {
        this.setState({
            edit: false,
            comment: this.props.favorite.comment,
        })
    }

    render() {
        return (
            <div className="mdc-card">

                <audio ref={(sound) => { this.sound = sound; }}>
                    <source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg" >
                    </source>
		        </audio>

                <div className="mdc-card__media mdc-card__media--square">
                    <div className="mdc-card__media-content">Title</div>
                </div>
                <div>
                    <input disabled={this.state.edit} placeholder="Comments" onChange={this.handleChangeFor} />
                </div>
                <div className="mdc-card__actions">
                    <div className="mdc-card__action-buttons">
                        <button className="mdc-button mdc-card__action mdc-card__action--button" onClick={this.handleEditClick}>Edit</button>
                        <button className="mdc-button mdc-card__action mdc-card__action--button" onClick= {() => {this.handleDelete(this.props.favorite._id)}}>Delete</button>
                        <button className="mdc-button mdc-card__action mdc-card__action--button" onClick={this.handleSave}>Save</button>
                        <button className="mdc-button mdc-card__action mdc-card__action--button" onclick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(mapStateToProps)(FavoriteObject);