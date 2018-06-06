import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './UserPage.css'
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';




const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: USER_ACTIONS.FETCH_USER
    });
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

  render() {
    // let content = null;

    // if (this.props.user.userName) {
    //   content = (
    //     <div>
    //       <h1
    //         id="welcome"
    //       >
    //         Welcome, {this.props.user.userName}!
    //       </h1>

    //     </div>
    //   );
    // }

    return (
      <div className="homePage">
        {/* {content} */}
        <div className="learnLaoHeader">
          <h1>Learn Lao</h1>

        </div>
        <br />


        <div>
          <div class="topnav">
            <div className="homePageBoarder">
              <h2><Link to="/user">Home</Link></h2>
            </div>
            <br />
            <div className="homePageBoarder">
              <h2><Link to="/Consonants">Consonants</Link></h2>
            </div>
            <br />
            <div className="homePageBoarder">
              <h2><Link to="/vowels">Vowels</Link></h2>
            </div>
            <br />
            <div className="homePageBoarder">
              <h2><Link to="/vocabulary">Vocabulary</Link></h2>
            </div>
            <br />
            <div className="homePageBoarder">
              <h2><Link to="/favorites">Favorites</Link></h2>
            </div>
            <br />
            <a href='#' className="homePageBoarder" onClick={this.logout}>Log Out</a>
          </div>

        </div>


      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

