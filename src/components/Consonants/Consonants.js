import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import axios from 'axios';
import { connect } from 'react-redux';
import { getConsonant } from '../../redux/actions/consonantActions'


const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);


class Consonants extends Component {
    constructor(props) {
        super(props);
        // /Users/payeng/prime/kochab/solo-project/learn-lao/src/mp3/consonants/h1.mp3
    }

    //this.state.img_path + img.img_path

    componentDidMount() {
        this.props.dispatch(getConsonant());
    }

    render() {
        console.log('this.state', this.state)
        // console.log('this', this)
        console.log('sadsdredux', this.props.reduxState.consonant)

        let consonantDisplay = this.props.reduxState.consonant.consonant.map(((consonant) => {
            console.log('img path:', ('data/images/consonants/' + consonant.img_path));
            return (

                <div className="mdc-card" key={consonant._id}>
                    <div className="mdc-card__media mdc-card__media--square">
                        <img src={('data/images/consonants/' + consonant.img_path)} />
                    </div>
                    <div className="mdc-card__actions">
                        <div className="mdc-card__action-buttons">
                            <i className="material-icons">favorite</i>
                            <i className="material-icons">favorite_border</i>
                            <button className="mdc-button mdc-card__action mdc-card__action--button">Favorite</button>
                        </div>

                        <div className="mdc-card__action-icons">
                            {/* <i class="material-icons mdc-card__action mdc-card__action--icon" tabindex="0" role="button" title="Share">share</i> */}
                        </div>
                    </div>
                </div>
            );
        }))

        return (
            <div>
                <Nav />
                <h2>Consonants</h2>

                {consonantDisplay}
            </div>
        );

    }
};

export default connect(mapReduxStateToProps)(Consonants);