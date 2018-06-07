import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import axios from 'axios';
import { connect } from 'react-redux';
import { getVocabulary } from '../../redux/actions/vocabularyActions'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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

                <Card key={vocabulary._id} className='card'>
                    <CardMedia
                        className='cardMedia'
                        image={('data/images/vocabulary/' + vocabulary.img_path)}
                        title="title"
                    />
                    <CardActions>
                        <Button size="small" color="primary">
                            <i className="material-icons">favorite</i>
                        </Button>
                        <Button size="small" color="primary">
                            <i className="material-icons">favorite_border</i>
                        </Button>
                    </CardActions>
                </Card>
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