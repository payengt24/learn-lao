import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import axios from 'axios';
import { connect } from 'react-redux';
import { getConsonant } from '../../redux/actions/consonantActions'
import CardObject from '../CardObject/CardObject'
import { USER_ACTIONS } from '../../redux/actions/userActions'
import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';

const mapReduxStateToProps = (reduxState) => ({ 
    reduxState,
    user: reduxState.user,
    }
);

class Consonants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteConsonant: [],
        }

    }
  
    componentDidMount() {
      this.props.dispatch({
        type: USER_ACTIONS.FETCH_USER
      });
        this.props.dispatch(getConsonant());
        console.log('mount, checking this after', this)
    }

    componentDidUpdate() {
      if (!this.props.user.isLoading && this.props.user.userName === null) {
        this.props.history.push('home');
      }
    }


    logout = () => {
        this.props.dispatch({
          type: LOGIN_ACTIONS.LOGOUT
        });
        this.props.history.push('home');
      }
    
      isFavorite = (value) => {
        //   console.log('11111');
        //   console.log(this.props.reduxState.user.favorites)
          let found = this.props.reduxState.user.favorites.filter((element) => {
              console.log(111);
              console.log(element);
              if (element.type === 'consonant' && element.object_id === value._id) {
                return true;
              } else {
                  return false;
              }
          });
    
          if(found.length > 0){
            return ['none', 'block'];
          }
          return ['block', 'none'];
      } 


    render() {        
        let consonantDisplay = this.props.reduxState.consonant.consonant.map(((consonant) => {
            // console.log('img path:', ('data/images/consonants/' + consonant.img_path));
            return (
                <CardObject buttonDisplay={this.isFavorite(consonant)} cardObject={consonant} key={consonant._id} path={'data/images/consonants/'} type={'consonant'} />
            );
        }))

        return (
            <div className="backgroundss">
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
                <Nav isLogin="true" onClick={this.logout}/>
                {/* <h2>Consonants</h2> */}
                <div className="container">

                {consonantDisplay}
                </div>
            </div>
        );

    }
};

export default connect(mapReduxStateToProps)(Consonants);