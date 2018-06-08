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


const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class CardObject extends Component {
    constructor(props) {
        super(props);
    }

    handleFavorite = () => {
        const data = {
            id: this.props.cardObject._id,
            type: 'consonant',
            img_path: this.props.cardObject.img_path,
            mp3_path: this.props.cardObject.mp3_path,
            comments: ''
        }
        const userName = {
            username: this.props.reduxState.user.userName,
        }

        this.props.dispatch({ type: FAVORITE_ACTIONS.ADD, payload: data, userName })
    }

    render() {
        console.log('cardDisplay', this.props.path + this.props.cardObject.img_path);
        console.log('this', this);


        let card = <Card key={this.props.cardObject._id} className='card'>
            <CardMedia
                className='cardMedia'
                image={(this.props.path + this.props.cardObject.img_path)}
                title="title"
            />
            <CardActions>
                <Button size="small" color="primary">
                    <i className="material-icons">favorite</i>
                </Button>
                <Button size="small" color="primary">
                    <i className="material-icons" onClick={this.handleFavorite}>favorite_border</i>
                </Button>
            </CardActions>
        </Card>

        return (

            <div>
                {card}
            </div>
        );

    }
};

export default connect(mapReduxStateToProps)(CardObject);