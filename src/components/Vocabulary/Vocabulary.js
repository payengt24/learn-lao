import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { getVocabulary } from '../../redux/actions/vocabularyActions'
import CardObject from '../CardObject/CardObject'
import { USER_ACTIONS } from '../../redux/actions/userActions'

const mapReduxStateToProps = (reduxState) => ({
    reduxState,
    user: reduxState.user,
});

class Vocabulary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteVocabulary: [],
        }

    }

    componentDidMount() {
        this.props.dispatch({
            type: USER_ACTIONS.FETCH_USER
          });
        this.props.dispatch(getVocabulary());
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }

    isFavorite = (value) => {
          let found = this.props.reduxState.user.favorites.filter((element) => {
              if (element.type === 'vocabulary' && element.object_id === value._id) {
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
        console.log('this.state vocab', this.state)
        console.log('redux vocab', this.props.reduxState.vocabulary)

        let vocabularyDisplay = this.props.reduxState.vocabulary.vocabulary.map(((vocabulary) => {
            console.log('img path:', ('data/images/vocabulary/' + vocabulary.img_path));
            return (

                <CardObject buttonDisplay={this.isFavorite(vocabulary)} cardObject={vocabulary} key={vocabulary._id} path={'data/images/vocabulary/'} type={'vocabulary'}/>
            );
        }))

        return (
            <div>
                <header>
                    <div className="image backgroundss">
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
                <div className="container">
                {vocabularyDisplay}
                </div>
            </div>
        );

    }
};

export default connect(mapReduxStateToProps)(Vocabulary);