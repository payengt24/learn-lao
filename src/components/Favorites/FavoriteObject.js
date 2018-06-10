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



const mapReduxStateToProps = (reduxState) => ({
    reduxState,
    user: reduxState.user,
}
);

class FavoriteObject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            delete: false,
            // save: 'display: none;',
            comment: this.props.cardObject.comment,
            commentChange: 'Comment',
        };
        this.edit = {
            display: 'block',
        };
        this.save = {
            display: 'none',
        };
        this.delete = {
            display: 'block',
        };
        this.cancel = {
            display: 'none',
        };
        this.playAudio = () => { this.sound.play };
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
        if (this.state.delete == false) {

            this.delete = {
                display: 'none',
            };
            this.cancel = {
                display: 'block',
            };
            this.setState({
                delete: true,
            })
        } else {
            this.delete = {
                display: 'block',
            };
            this.cancel = {
                display: 'none',
            };
            this.setState({
                delete: false,
            })
        }
    }

    handleSaveComment = () => {
        const data = {
            id: this.props.cardObject._id,
            type: this.props.cardObject.type,
            img_path: this.props.cardObject.img_path,
            mp3_path: this.props.cardObject.mp3_path,
            comment: this.state.comment,
        }
        // console.log('1------payload: this.state', this.props.cardObject._id)
        // this.props.dispatch({ type: FAVORITE_ACTIONS.SET, payload: this.props.cardObject._id})
        console.log('-------------data=====', data)
        this.props.dispatch({ type: FAVORITE_ACTIONS.SET, payload: data })

        this.handleEditComment();

    }

    handleCancelButton = () => {
        this.handleEditComment();
        let value = this.state.comment;
        if(value) {
            this.setState({
            comment: null,
        });
    }
    }

    handleEditComment = () => {
        console.log('clicked-------', this.state.edit)
        if (this.state.edit == false) {

            this.edit = {
                display: 'none',
            };
            this.save = {
                display: 'block',
            };
            this.cancel = {
                display: 'block',
            };
            this.delete = {
                display: 'none',
            };

            this.setState({
                edit: true,
            })
        } else {
            this.edit = {
                display: 'block',
            };
            this.save = {
                display: 'none',
            };
            this.cancel = {
                display: 'none',
            };
            this.delete = {
                display: 'block',
            };
            this.setState({
                edit: false,
            })
        }
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
           
                    <Button style={this.save} size="small" color="primary" className="button save" onClick={this.handleSaveComment}>
                        <i className="material-icons">save</i>
                        <p>Save</p>
                    </Button>
                    <Button style={this.edit} size="small" color="primary" className="button edit" onClick={this.handleEditComment}>
                        <i className="material-icons">edit</i>
                        <p>Edit</p>
                    </Button>
                    <Button style={this.cancel} size="small" color="primary" className="button cancel" onClick={this.handleCancelButton}>
                        <i className="material-icons">cancel</i>
                        <p>Cancel</p>
                    </Button>
                    <Button style={this.delete} size="small" color="primary" className="button delete" onClick={this.handleDelete}>
                        <i className="material-icons" >delete</i>
                        <p>Delete</p>
                    </Button>

            </CardActions>


        </Card>

        return (
            <div className="mdc-card">

                {/* <audio ref={(sound) => { this.sound = sound; }}>
                    <source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg" >
                    </source>
		        </audio> */}


                {card}

            </div>
        )
    }

}

export default connect(mapReduxStateToProps)(FavoriteObject);