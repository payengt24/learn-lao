import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import FavoriteObject from '../Favorites/FavoriteObject'


const mapStateToProps = state => ({
    user: state.user,
});

class Favorites extends Component {



    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
          this.props.history.push('home');
        }
      }

      
    constructor(props) {
        super(props);
        this.state = ({
            comment: '',
        })
    }

    handleChangeFor = propertyName => event => {
        console.log('change', event.target.value)
        this.setState({
            comment: {
                ...this.state.comment,
                [propertyName]: event.target.value
            }
        })
    }

    handleSave = (event) => {
        this.props.dispatch({ type: 'POST_FAVORITE', payload: this.state})
        this.setState ({
            comment: '',
        })
    }


    render() {

        console.log('this.state   sdfs favorite', this)
        console.log('sadsdredux favorite', this.props.user.favorites)

        let path = ''
        let favoriteDisplay = this.props.user.favorites.map(((favorite) => {
            if (favorite.type === 'consonant') {
                path = 'data/images/consonants/'
           }else if (favorite.type === 'vowel') {
               path = 'data/images/vowels/'
           }else {
               path = 'data/images/vocabulary/'
           }
            return (
                <FavoriteObject cardObject={favorite} path = {path} key={favorite._id}/>
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

                <h1 id="welcome">Welcome, {this.props.user.userName}!</h1>
                <h2>Favorites</h2>

                {favoriteDisplay}

            </div>
        );

    }
};

export default connect(mapStateToProps)(Favorites);