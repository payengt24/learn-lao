import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { getVowel } from '../../redux/actions/vowelActions'
import CardObject from '../CardObject/CardObject'


const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);




class Vowels extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getVowel());
    }

    

    render() {
        console.log('this.state vowel', this.state)
        // console.log('this', this)
        console.log('vowel redux', this.props.reduxState.vowel)

        let vowelDisplay = this.props.reduxState.vowel.vowel.map(((vowel) => {
            console.log('img path:', ('data/images/vowels/' + vowel.img_path));
            return (

                <CardObject cardObject={vowel} key={vowel._id} path={'data/images/vowels/'} type={'vowel'}/>
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
                {/* <h2>Vowels</h2> */}

                {vowelDisplay}

            </div>
        );

    }
};

export default connect(mapReduxStateToProps)(Vowels);