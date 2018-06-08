import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import axios from 'axios';
import { connect } from 'react-redux';
import { getConsonant } from '../../redux/actions/consonantActions'
import CardObject from '../CardObject/CardObject'


const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class Consonants extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.dispatch(getConsonant());
    }

    render() {
        console.log('this.state', this.state)
        console.log('sadsdredux', this.props.reduxState.consonant)

        let consonantDisplay = this.props.reduxState.consonant.consonant.map(((consonant) => {
            console.log('img path:', ('data/images/consonants/' + consonant.img_path));
            return (
                
                <CardObject cardObject={consonant} key={consonant._id} path={'data/images/consonants/'}/>

            );
        }))

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
                {/* <h2>Consonants</h2> */}

                {consonantDisplay}
            </div>
        );

    }
};

export default connect(mapReduxStateToProps)(Consonants);