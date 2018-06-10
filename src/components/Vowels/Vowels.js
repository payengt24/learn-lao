import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import { getVowel } from '../../redux/actions/vowelActions'
import CardObject from '../CardObject/CardObject'
import { USER_ACTIONS } from '../../redux/actions/userActions'


const mapReduxStateToProps = (reduxState) => ({
    reduxState,
    user: reduxState.user,
}
);




class Vowels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteVowel: [],
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type: USER_ACTIONS.FETCH_USER
        });
        this.props.dispatch(getVowel());
    }

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }


      isFavorite = (value) => {
        //   console.log('11111');
        //   console.log(this.props.reduxState.user.favorites)
          let found = this.props.reduxState.user.favorites.filter((element) => {
              console.log(111);
              console.log(element);
              if (element.type === 'vowel' && element.object_id === value._id) {
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
        console.log('this.state vowel', this.state)
        // console.log('this', this)
        console.log('vowel redux', this.props.reduxState.vowel)

        let vowelDisplay = this.props.reduxState.vowel.vowel.map(((vowel) => {
            console.log('img path:', ('data/images/vowels/' + vowel.img_path));
            return (

                <CardObject buttonDisplay={this.isFavorite(vowel)} cardObject={vowel} key={vowel._id} path={'data/images/vowels/'} type={'vowel'} />
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