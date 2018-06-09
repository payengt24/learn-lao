import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FAVORITE_ACTIONS } from '../../redux/actions/favoriteActions';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const mapStateToProps = state => ({
    user: state.user,
});

class FavoriteObject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        };

        this.playAudio = () => { this.sound.play };
    }

    handleEditClick = () => {
        this.setState({
            edit: true,
        })
    }

    handleChangeFor = (property) => (event) => {
        console.log(event.target.value)
        this.setState({
            [property]: event.target.value
        })
    }

    handleDelete = () => {
        console.log('reduxsdasd', this)
        const action = {
            type: FAVORITE_ACTIONS.DELETE,
            payload: {
                id: this.props.cardObject._id,
                username: this.props.user.userName
            },
        }
        console.log('my action', action);
        this.props.dispatch(action);
    }

    // handleSaveComment = () => {
    //     // this.props.dispatch({ type: FAVORITE_ACTIONS.ADD, payload: this.state})
    // }

    handleCancel = () => {
        this.setState({
            edit: false,
            comment: this.props.favorite.comment,
        })
    }



    render() {

        let card = <Card key={this.props.cardObject._id} className='card'>
            <CardMedia
                className='cardMedia'
                image={(this.props.path + this.props.cardObject.img_path)}
                title="title"
            />

            <input placeholder="Comments" value={this.state.comment} onChange={this.handleChangeFor('comment')} />

            <CardActions>
                <div onClick={this.handleDelete}>
                    <Button size="small" color="primary" className="button save" onClick={this.handleSaveComment}>
                        <i className="material-icons">save</i>
                        <p>Save</p>
                    </Button>
                    <Button size="small" color="primary" className="button edit">
                        <i className="material-icons">edit</i>
                        <p>Edit</p>
                    </Button>
                    <Button size="small" color="primary" className="button cancel">
                        <i className="material-icons">cancel</i>
                        <p>Cancel</p>
                    </Button>
                    <Button size="small" color="primary" className="button delete">
                        <i className="material-icons" >delete</i>
                        <p>Delete</p>
                    </Button>
                </div>
            </CardActions>


        </Card>

        return (
            <div className="mdc-card">

                {/* <audio ref={(sound) => { this.sound = sound; }}>
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
                </div> */}

                {card}

            </div>
        )
    }

}

export default connect(mapStateToProps)(FavoriteObject);