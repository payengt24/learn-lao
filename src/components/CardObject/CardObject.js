import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FAVORITE_ACTIONS } from '../../redux/actions/favoriteActions'

// import { FAVORITE_ACTIONS } from '../../actions/favoriteActions';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
    user: reduxState.user,
}
);

class CardObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySave: this.props.buttonDisplay[0],
            displayUnsave:  this.props.buttonDisplay[1],
        }
        this.saveFavorite = {
            display: this.state.displaySave,
        };
        this.removeFavorite = {
            display: this.state.displayUnsave,
        };
        this.playAudio = () => { this.sound.play() };
    }

    handleFavorite = () => {
        const data = {
            object_id: this.props.cardObject._id,
            type: this.props.type,
            img_path: this.props.cardObject.img_path,
            mp3_path: this.props.cardObject.mp3_path,
            comments: ''
        }
        const userName = {
            username: this.props.reduxState.user.userName,
        }

        this.props.dispatch({ type: FAVORITE_ACTIONS.ADD, payload: data, userName })

        this.saveFavorite = {
            display: 'none',
        };
        this.removeFavorite = {
            display: 'block',
        };
    }


    handleUnFavorite = () => {
        const action = {
            type: FAVORITE_ACTIONS.DELETE,
            payload: {
                object_id: this.props.cardObject._id,
                username: this.props.user.userName
            },
        }
        // console.log('deleted from handleUnFavorite----------', action);
        this.props.dispatch(action);

        this.saveFavorite = {
            display: 'block',
        };
        this.removeFavorite = {
            display: 'none',
        };
    }


    render() {
        let audio =
        <audio ref={(sound) => { this.sound = sound; }}>
            <source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg" >
            </source>
        </audio>
        // console.log('cardDisplay', this.props.path + this.props.cardObject.img_path);
        console.log('this------card', this);

        let card = <Card key={this.props.cardObject._id} className='card'>
            <CardMedia onClick={this.playAudio}
                className='cardMedia'
                image={(this.props.path + this.props.cardObject.img_path)}
                title="title"
            />
            <CardActions>
                <Button className="favorite col-sm-12" style={this.saveFavorite} onClick={this.handleFavorite} size="small" color="primary">
                    <i className="material-icons" >favorite_border</i>
                    <p>Favorite</p>
                </Button>


                <Button className="favorite col-sm-12" style={this.removeFavorite} onClick={this.handleUnFavorite} size="small" color="primary">
                    <i className="material-icons">favorite</i>
                    <p>Unfavorite</p>
                </Button>


            </CardActions>

            <CardActions>

            </CardActions>
        </Card>

        return (

            <div>
                {card}
                {audio}
            </div>
        );

    }
};

export default connect(mapReduxStateToProps)(CardObject);