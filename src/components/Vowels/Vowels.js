import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
    user: state.user,
});

class Vowels extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: USER_ACTIONS.FETCH_USER
        });
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
            this.props.history.push('home');
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />
                <h2>Vowels</h2>

                <div class="mdc-card">
                    <div class="mdc-card__media mdc-card__media--square">
                        <div class="mdc-card__media-content">Title</div>
                    </div>
                    <div class="mdc-card__actions">
                        <div class="mdc-card__action-buttons">
                            <i class="material-icons">favorite</i>
                            <i class="material-icons">favorite_border</i>
                            <button class="mdc-button mdc-card__action mdc-card__action--button">Favorite</button>
                        </div>
                        <div class="mdc-card__action-icons">
                            {/* <i class="material-icons mdc-card__action mdc-card__action--icon" tabindex="0" role="button" title="Share">share</i> */}
                        </div>
                    </div>
                </div>
            </div>
        );

    }
};

export default connect(mapStateToProps)(Vowels);