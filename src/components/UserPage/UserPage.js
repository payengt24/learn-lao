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

    console.log(this);
    return (
      <div className="background col-sm-12">
        <div className="homePage">
          {/* {content} */}
          <div className="text-box-user">
            <h1 className="heading-primary">
              <span>
                <div className="logo-box">
                  <img src="data/images/logo.png" alt="Logo" className="logo" />
                </div>
              </span>
              <span className="heading-primary-main-register">Sa-bai-dee</span>
              {/* <span className="heading-primary-sub-register">Learn Lao</span> */}
              <span className="heading-primary-sub-register">Welcome, {this.props.user.userName}!</span>
            </h1>

          </div>
          <br />


          <div>

            <div className="topnav">
              <div className="homePageBoarder">
                <h2><Link to="/user" className="link">Home</Link></h2>
              </div>
              <br />
              <div className="homePageBoarder">
                <h2><Link to="/Consonants" className="link">Consonants</Link></h2>
              </div>
              <br />
              <div className="homePageBoarder">
                <h2><Link to="/vowels" className="link">Vowels</Link></h2>
              </div>
              <br />
              <div className="homePageBoarder">
                <h2><Link to="/vocabulary" className="link">Vocabulary</Link></h2>
              </div>
              <br />
              <div className="homePageBoarder">
                <h2><Link to="/favorites" className="link">Favorites</Link></h2>
              </div>
              <br />
              <a href='#' className="homePageBoarder" onClick={this.logout} className="link">Log Out</a>
            </div>

          </div>


        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(UserPage);

