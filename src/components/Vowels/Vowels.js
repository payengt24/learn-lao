import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import axios from 'axios';
import { getVowel } from '../../redux/actions/vowelActions'

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

                <Card key={vowel._id} className='card'>
                    <CardMedia
                        className='cardMedia'
                        image={('data/images/vowels/' + vowel.img_path)}
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
                <Nav />
                <h2>Vowels</h2>

            {vowelDisplay}
    
            </div>
        );

    }
};

export default connect(mapReduxStateToProps)(Vowels);