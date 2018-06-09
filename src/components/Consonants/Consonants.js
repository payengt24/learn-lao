import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import axios from 'axios';
import { connect } from 'react-redux';
import { getConsonant } from '../../redux/actions/consonantActions'
import CardObject from '../CardObject/CardObject'
import { USER_ACTIONS } from '../../redux/actions/userActions'


const mapReduxStateToProps = (reduxState) => ({ 
    reduxState,
    user: reduxState.user,
    }
);

class Consonants extends Component {
    constructor(props) {
        super(props);

    }
  
    componentDidMount() {
      this.props.dispatch({
        type: USER_ACTIONS.FETCH_USER
      });
        this.props.dispatch(getConsonant());
    }

    componentDidUpdate() {
      if (!this.props.user.isLoading && this.props.user.userName === null) {
        this.props.history.push('home');
      }
    }


    

    render() {
        console.log('this.state', this.state)
        console.log('sadsdredux', this.props.reduxState.consonant)

        let consonantDisplay = this.props.reduxState.consonant.consonant.map(((consonant) => {
            console.log('img path:', ('data/images/consonants/' + consonant.img_path));
            return (
                <CardObject cardObject={consonant} key={consonant._id} path={'data/images/consonants/'} type={'consonant'} />
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
                {/* <h2>Consonants</h2> */}

                {consonantDisplay}
            </div>
        );

    }
};

export default connect(mapReduxStateToProps)(Consonants);