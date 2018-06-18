import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FAVORITE_ACTIONS } from '../../redux/actions/favoriteActions';
import swal from 'sweetalert2/dist/sweetalert2.all';

import withReactContent from 'sweetalert2-react-content/dist/sweetalert2-react-content.cjs'

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

const SweetAlert = withReactContent(swal);

class FavoriteObject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            delete: false,
            // save: 'display: none;',
            commentEdit: false,
            comment: this.props.cardObject.comment,
            alert: null,
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
        this.playAudio = () => { this.sound.play() };
    }



    handleChangeFor = (property) => (event) => {
        console.log(event.target.value)
        this.setState({
            [property]: event.target.value
        })
    }

    handleDelete = () => {

        SweetAlert.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {

                // console.log('reduxsdasd', this);
                const action = {
                    type: FAVORITE_ACTIONS.DELETE,
                    payload: {
                        object_id: this.props.cardObject.object_id,
                        username: this.props.user.userName
                    },
                }
                // console.log('my action', action);
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

                SweetAlert.fire(
                    'Deleted!',
                    'Your favorite has been deleted.',
                    'success'
                )

            } else if (
                // Read more about handling dismissals
                result.dismiss === SweetAlert.DismissReason.cancel
            ) {
                SweetAlert.fire(
                    'Cancelled',
                    // 'Your favorixte is safe :) ☺',
                    'Your favorite is safe ☺',
                    'error'
                )
            }
        })

    }

    handleSaveComment = () => {
        const data = {
            object_id: this.props.cardObject.object_id,
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
        if(this.props.cardObject.comment == null || ''){
            this.setState({
                comment: '',
            });
        }else{
            this.setState({
                comment: this.props.cardObject.comment,
            });
        }

        this.setState(this.baseState)
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
        let audio =
            <audio ref={(sound) => { this.sound = sound; }}>
                {/* <source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg" >
                </source> */}
                <source src={this.props.cardObject.mp3_path} type="audio/mpeg" >
                </source>
            </audio>

        let card = <Card key={this.props.cardObject._id} className='card grid-item'>
            <CardMedia onClick={this.playAudio}
                className='cardMedia'
                // image={(this.props.path + this.props.cardObject.img_path)}
                image={this.props.cardObject.img_path}
                title="click for audio"
            />


            <input disabled={(!this.state.edit) ? "disabled" : ""} placeholder="Comments" value={this.state.comment} onChange={this.handleChangeFor('comment')} />

            <CardActions>

                <Button style={this.save} size="small" color="primary"  onClick={this.handleSaveComment}>
                    <i className="material-icons">save</i>
                    <p className="iconText">Save</p>
                </Button>
                <Button style={this.edit} size="small" color="primary"  onClick={this.handleEditComment}>
                    <i className="material-icons">edit</i>
                    <p className="iconText">Edit Comment</p>
                </Button>
                <Button style={this.cancel} size="small" color="primary"  onClick={this.handleCancelButton}>
                    <i className="material-icons">cancel</i>
                    <p className="iconText">Cancel</p>
                </Button>
                <Button style={this.delete} size="small" color="primary"  onClick={this.handleDelete}>
                    <i className="material-icons" >delete</i>
                    <p className="iconText">Delete</p>
                </Button>

            </CardActions>


        </Card>

        return (
            <div className="col-sm-12 col-md-4 col-lg-3">

                {card}
                {audio}

            </div>
        )
    }

}

export default connect(mapReduxStateToProps)(FavoriteObject);