import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { getVocabulary } from '../../redux/actions/vocabularyActions'
import CardObject from '../CardObject/CardObject'

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class Vocabulary extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getVocabulary());
    }

    

    render() {
        console.log('this.state vocab', this.state)
        console.log('redux vocab', this.props.reduxState.vocabulary)

        let vocabularyDisplay = this.props.reduxState.vocabulary.vocabulary.map(((vocabulary) => {
            console.log('img path:', ('data/images/vocabulary/' + vocabulary.img_path));
            return (

                <CardObject cardObject={vocabulary} key={vocabulary._id} path={'data/images/vocabulary/'} type={'vocabulary'}/>
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
                <Nav isLogin="true" />
                {/* <h2>Vocabulary</h2> */}

                {vocabularyDisplay}

            </div>
        );

    }
};

export default connect(mapReduxStateToProps)(Vocabulary);