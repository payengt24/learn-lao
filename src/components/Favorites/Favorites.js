import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    user: state.user,
});

class Favorites extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />

                <h1 id="welcome">Welcome, {this.props.user.userName}!</h1>
                <h2>Favorites</h2>

                <h4>Consonants</h4>

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