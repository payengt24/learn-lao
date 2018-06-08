import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    user: state.user,
});

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            comment: '',
        })
    }

    handleChangeFor = propertyName => event => {
        console.log('change', event.target.value)
        this.setState({
            comment: {
                ...this.state.comment,
                [propertyName]: event.target.value
            }
        })
    }

    handleSave = (event) => {
        this.props.dispatch({ type: 'POST_FAVORITE', payload: this.state})
        this.setState ({
            comment: '',
        })
    }

    handleDelete = (id) => {
        const action = {
          type: 'DELETE_FAVORITE',
          payload: id,
        }
        this.props.dispatch(action);
      }


    render() {
        return (
            <div>
                <header>
                    <div className="image">
                        <div className="text-box-user">
                            <h1 className="heading-primary">
                                <span>
                                    <div className="logo-box">

                                    </div>
                                </span>
                                <span className="heading-primary-main-register">
                                    {/* <img src="data/images/logo.png" alt="Logo" className="logo" /> */}
                                    Sa-bai-dee
                            </span>
                            </h1>

                        </div>
                    </div>
                </header>
                <Nav />

                <h1 id="welcome">Welcome, {this.props.user.userName}!</h1>
                <h2>Favorites</h2>

                <h4>Consonants</h4>

                <div className="mdc-card">
                    <div className="mdc-card__media mdc-card__media--square">
                        <div className="mdc-card__media-content">Title</div>
                    </div>
                    <div>
                        <input placeholder="Comments" onClick={this.handleChangeFor('comment')} />
                    </div>
                    <div className="mdc-card__actions">
                        <div className="mdc-card__action-buttons">
                            <button className="mdc-button mdc-card__action mdc-card__action--button">Edit</button>
                            <button className="mdc-button mdc-card__action mdc-card__action--button" onClick={this.handleDelete}>Delete</button>
                            <button className="mdc-button mdc-card__action mdc-card__action--button" onClick={this.handleSave}>Save</button>
                            <button className="mdc-button mdc-card__action mdc-card__action--button">Cancel</button>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h4>Vowels</h4>
                <div className="mdc-card">
                    <div className="mdc-card__media mdc-card__media--square">
                        <div className="mdc-card__media-content">Title</div>
                    </div>
                    <div>
                        <input placeholder="Comments" />
                    </div>
                    <div className="mdc-card__actions">
                        <div className="mdc-card__action-buttons">
                            <button className="mdc-button mdc-card__action mdc-card__action--button">Edit</button>
                            <button className="mdc-button mdc-card__action mdc-card__action--button">Delete</button>
                            <button className="mdc-button mdc-card__action mdc-card__action--button">Save</button>
                            <button className="mdc-button mdc-card__action mdc-card__action--button">Cancel</button>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h4>Vocabulary</h4>
                <div className="mdc-card">
                    <div className="mdc-card__media mdc-card__media--square">
                        <div className="mdc-card__media-content">Title</div>
                    </div>
                    <div>
                        <input placeholder="Comments" />
                    </div>
                    <div className="mdc-card__actions">
                        <div className="mdc-card__action-buttons">
                            <button className="mdc-button mdc-card__action mdc-card__action--button">Edit</button>
                            <button className="mdc-button mdc-card__action mdc-card__action--button">Delete</button>
                            <button className="mdc-button mdc-card__action mdc-card__action--button">Save</button>
                            <button className="mdc-button mdc-card__action mdc-card__action--button">Cancel</button>
                        </div>
                    </div>
                </div>


            </div>
        );

    }
};

export default connect(mapStateToProps)(Favorites);