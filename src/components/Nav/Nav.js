import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';

const mapStateToProps = state => ({
  user: state.user,
});

const logout = () => {
  this.props.dispatch({
    type: LOGIN_ACTIONS.LOGOUT
  });
  this.props.history.push('home');
}

const Nav = (props) => {
  console.log('...... props:')
  console.log(props);
  const loginButton = props.isLogin ? (
    <li >
      <Link onClick={logout} to="/">
        Logout
      </Link>
    </li>
  ) : '';

  return (
    <div className="navbar">
      <div>
        <li>
        {/* <Link to="/user"><img src="data/images/logo.png" alt="Logo" className="logo" /> </Link> */}
        <img src="data/images/logo.png" alt="Logo" className="logo" /> 
        </li>
        <ul>
          <li>
            <Link to="/user">
              Home
          </Link>
          </li>
          <li>
            <Link to="/consonants">
              Consonants
          </Link>
          </li>
          <li>
            <Link to="/vowels">
              Vowels
          </Link>
          </li>
          <li>
            <Link to="/vocabulary">
              Vocabulary
          </Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
          </Link>
          </li>
          {loginButton}


          {/* <li><button className="logOutButton" onClick={this.logout}>Log Out</button></li> */}
        </ul>
      </div>



    </div>



    // <div>
    //   <div className="collapse" id="navbarToggleExternalContent">
    //     <div className="bg-dark p-4">
    //       <ul>
    //         <li>
    //           <Link to="/user">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/consonants">
    //             Consonants
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/vowels">
    //             Vowels
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/vocabulary">
    //             Vocabulary
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/favorites">
    //             Favorites
    //         </Link>
    //         </li>
    //         {loginButton}
    //         {/* <li><button className="logOutButton" onClick={this.logout}>Log Out</button></li> */}
    //       </ul>
    //     </div>
    //   </div>
    //   <nav className="navbar navbar-dark bg-dark">
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //   </nav>
    // </div>

  )
};

export default connect(mapStateToProps)(Nav);
