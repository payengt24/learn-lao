import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import axios from 'axios';
import { connect } from 'react-redux';
import { getConsonant } from '../../redux/actions/consonantActions'



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

                <Card key={consonant._id} className='card'>
                    <CardMedia
                        className='cardMedia'
                        image={('data/images/consonants/' + consonant.img_path)}
                        title="title"
                    />
                    {/* <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Lizard
                    </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                    </Typography>
                    </CardContent> */}
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
                <h2>Consonants</h2>

                {consonantDisplay}
            </div>
        );

    }
};

export default connect(mapReduxStateToProps)(Consonants);